import express from 'express';
import authRoutes from './routes/auth';
import authenticateJWT from './middleware/authMiddleware';

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/protected', authenticateJWT, (req, res) => {
  res.status(200).json({ message: 'Hello from protected route' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
