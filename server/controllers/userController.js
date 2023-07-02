import User from '../models/user.js';
import { generateSaltAndHash } from '../utils/auth.js';

const createUser = async (req, res) => {
  const { password, username, email } = req.body;
  const { salt, hash } = await generateSaltAndHash(password);

  const user = new User({
    username,
    email,
    hash,
    salt,
  });

  await user.save();
  return res.status(201).json({ username });
};

export default createUser;
