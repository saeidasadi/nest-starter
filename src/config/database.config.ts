import { registerAs } from '@nestjs/config';

export interface MongoDatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export default registerAs('database', () => ({
  mongo: {
    host: process.env.MONGO_DB_HOST,
    port: process.env.MONGO_DB_PORT,
    user: process.env.MONGO_DB_USER,
    password: process.env.MONGO_DB_PASSWORD,
    database: process.env.MONGO_DB_DATABASE,
  }
}));
