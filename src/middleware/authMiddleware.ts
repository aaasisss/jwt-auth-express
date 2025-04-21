import { NextFunction, Request, Response } from 'express';
import { verifyJWTToken } from '../utils/jwt';

const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res.status(401).json({ message: 'Missing token' });
    return;
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = verifyJWTToken(token);
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Invalid token',
    });
  }
};

export default authenticateJWT;
