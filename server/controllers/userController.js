import User from '../models/user.js';
import {
  generateSaltAndHash,
  isValidPassword,
  issueJwt,
} from '../utils/auth.js';
import { authErrors } from '../utils/customErrors.js';

export const createUser = async (req, res) => {
  const { password, username, email } = req.body;
  const { salt, hash } = await generateSaltAndHash(password);

  // Prevent duplicate usernames
  const existingUsername = await User.findOne({ username });
  if (existingUsername)
    return res.status(409).json(authErrors.usernameAlreadyExists);

  // Prevent duplicate email addresses
  const existingEmail = await User.findOne({ email });
  if (existingEmail) return res.status(409).json(authErrors.emailAlreadyExists);

  const user = new User({
    username,
    email,
    hash,
    salt,
  });

  await user.save();
  return res.status(201).json({ username });
};

export const logInUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) return res.status(401).json(authErrors.usernameDoesNotExist);

  const isValid = await isValidPassword(password, user.salt, user.hash);

  if (isValid) {
    console.log(issueJwt(user).token);
    // TODO change secure to environment variable (dev: false, prod: true)
    // TODO change sameSite to environment variable (dev: None, prod: Strict)
    res.cookie('auth', issueJwt(user), {
      // maxAge: 1000 * 60 * 60 * 24,
      // httpOnly: true,
      // secure: true,
      // sameSite: 'Strict',
    });

    return res.status(200).json({
      success: true,
    });
  }

  return res.status(401).json(authErrors.passwordIncorrect);
};

export const getUserProfile = async (req, res) => {
  try {
    const { user } = req;
    const { username, email, createdAt } = user;
    return res.json({ username, email, createdAt });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
