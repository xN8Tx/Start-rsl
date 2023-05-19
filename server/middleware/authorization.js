import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // Bearer TOKEN
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token === null || token === undefined ) return res.status(401).json({ error: 'Null token' });
  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, email) => {
    if (error) return res.status(401).json({ message: error.message });
    req.email = email;
    next();
  });
};

export { authenticateToken };