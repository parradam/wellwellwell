import crypto from 'crypto';

const genHash = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
};

export const isValidPassword = async (password, salt, hash) => {
  //   const hashVerify = await crypto
  //     .pbkdf2(password, salt, 10000, 64, 'sha512')
  //     .toString('hex');
  const hashVerify = genHash(password, salt);

  return hash === hashVerify;
};

export const generateSaltAndHash = async (password) => {
  const salt = crypto.randomBytes(32).toString('hex');
  //   const hash = await crypto
  //     .pbkdf2(password, salt, 10000, 64, 'sha512')
  //     .toString('hex');
  const hash = genHash(password, salt);

  return { salt, hash };
};
