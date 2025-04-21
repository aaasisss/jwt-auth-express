import dotenv from 'dotenv';

dotenv.config();

interface Config {
  PORT: number;
  ENVIRONMENT: string;
  JWT_SECRET: string;
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  ENVIRONMENT: process.env.NODE_ENV || 'development',
  JWT_SECRET: process.env.JWT_SECRET || 'secret key',
};

export default config;
