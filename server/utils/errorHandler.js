/* eslint-disable no-underscore-dangle */

const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const errorMessages = Object.values(err.errors).map((e) => ({
      path: e.path,
      message: e.message,
    }));
    return res.status(400).json({ errors: errorMessages });
  }

  return next(err);
};

export default errorHandler;
