import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface DecodedToken {
  userId: string;
  email: string;
  isAdmin: boolean;
}

export const generateToken = (userId: string, email: string, isAdmin: boolean): string => {
  return jwt.sign(
    { userId, email, isAdmin },
    process.env.JWT_SECRET || 'default-secret',
    { expiresIn: process.env.JWT_EXPIRATION || '7d' }
  );
};

export const verifyToken = (token: string): DecodedToken | null => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'default-secret') as DecodedToken;
  } catch (error) {
    return null;
  }
};

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  (req as any).user = decoded;
  next();
};

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const decoded = (req as any).user;

  if (!decoded || !decoded.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  next();
};
