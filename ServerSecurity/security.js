import sanitize from 'mongo-sanitize'


export const cleanBody = (req, res, next) => {
  req.body = sanitize(req.body);
  next();
};