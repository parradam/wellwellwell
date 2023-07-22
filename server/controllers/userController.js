import User from '../models/user.js';
import {
  generateSaltAndHash,
  isValidPassword,
  issueJwt,
} from '../utils/auth.js';

export const createUser = async (req, res) => {
  const { password, username, email } = req.body;
  const { salt, hash } = await generateSaltAndHash(password);

  const user = new User({
    username,
    email,
    hash,
    salt,
  });

  await user.save();
  return res.status(201).json(user);
};

export const logInUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) return res.status(401).json({ error: 'User not found' });

  const isValid = await isValidPassword(password, user.salt, user.hash);

  if (isValid) {
    const tokenObject = issueJwt(user);

    return res.status(200).json({
      success: true,
      token: tokenObject.token,
      expiresIn: tokenObject.expires,
    });
  }

  return res.status(401).json({ success: false, error: 'Password incorrect' });
};
