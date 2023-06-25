const errorHandler = (err, req, res, next) => {
  //   if (err.name === 'TypeError') {
  //     return res.status(400).json({ error: 'bad request' });
  //   }

  return next(err);
};

export default errorHandler;
