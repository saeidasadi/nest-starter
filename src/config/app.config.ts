import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3000,

  timezone: process.env.APP_TIMEZONE || 'UTC',
}));
