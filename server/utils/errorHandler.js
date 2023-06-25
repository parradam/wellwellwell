/* eslint-disable no-underscore-dangle */

const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err._message });
  }

  return next(err);
};

export default errorHandler;
