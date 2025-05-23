import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { generateJWTToken } from '../utils/jwt';

const router = Router();

interface LoginRequestDto {
  email: string;
  password: string;
}

const users = [{ id: 1, email: 'test@example.com', passwordHash: bcrypt.hashSync('password123', 8) }];

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body as LoginRequestDto;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Invalid request body',
    });
  }

  const user = users.find((user) => user.email === email);

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({
      message: 'Invalid credentials',
    });
  }

  const token = generateJWTToken({ id: String(user.id), email: user.email });
  return res.status(200).json({
    token,
  });
});

export default router;
