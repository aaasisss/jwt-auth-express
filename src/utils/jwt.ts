import jwt from 'jsonwebtoken';
import config from '../config';

export const generateJWTToken = ({ id, email }: { id: string; email: string }) => {
  return jwt.sign({ id, email }, config.JWT_SECRET, { expiresIn: '1H' });
};

export const verifyJWTToken = (token: string) => {
  return jwt.verify(token, config.JWT_SECRET);
};
