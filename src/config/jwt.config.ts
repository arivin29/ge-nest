import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET || 'rahasia123',
  expiresIn: process.env.JWT_EXPIRES_IN || '15m',
}));
