import jwt from 'jsonwebtoken';

const jwtTokens = ({id, email}) => {
  const user = { id, email };
  
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
  
  return ({ accessToken, refreshToken });
};

export { jwtTokens };