import * as dotenv from 'dotenv';

dotenv.config();

export const testConfig = {
  credentials: {
    email: process.env.TEST_USER_EMAIL || '',
    password: process.env.TEST_USER_PASSWORD || '',
    username: process.env.TEST_USER_NAME || ''
  }
} as const;