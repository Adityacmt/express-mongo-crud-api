export const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // VERY IMPORTANT
};
