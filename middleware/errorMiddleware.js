const notFound = (req, res, next) => {
  //Throw an error
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  //get status code: if the status is 200, set it to 500 server error, or return the status code - set to 500 as a default - inside a route, set a status code before throwing an error
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  //set the status to whatever the status code is
  res.status(statusCode);
  //respond with a json object with the error message and the stack trace when not in production
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
