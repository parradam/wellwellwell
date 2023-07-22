import crypto from 'crypto';
import jsonwebtoken from 'jsonwebtoken';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const genHash = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
};

export const isValidPassword = async (password, salt, hash) => {
  const hashVerify = genHash(password, salt);

  return hash === hashVerify;
};

export const generateSaltAndHash = async (password) => {
  const salt = crypto.randomBytes(32).toString('hex');
  const hash = genHash(password, salt);

  return { salt, hash };
};

export const issueJwt = (user) => {
  const filename = fileURLToPath(import.meta.url);
  const dir = dirname(filename);

  const pathToKey = join(dir, '..', 'private.pem');
  const PRIV_KEY = fs.readFileSync(pathToKey, 'utf-8');

  const id = user._id; // eslint-disable-line no-underscore-dangle
  const expiresIn = '1d';

  const payload = {
    sub: id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn,
    algorithm: 'RS256',
  });

  return {
    token: `Bearer: ${signedToken}`,
    expires: expiresIn,
  };
};
