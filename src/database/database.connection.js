import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();

const configDatabase = {
  connectionString: process.env.DATABASE_URL
}

if (process.env.NODE_ENV === 'production') configDatabase.ssl = true;

export const db = new Pool(configDatabase);
