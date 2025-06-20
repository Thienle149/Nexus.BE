import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
};

let pool: Pool | null = null;

//Khởi tạo pool
export const initPool = async () => {
  try {
    pool = new Pool(config);
    pool.on('connect', () => {
      console.log('✅ Connected to PostgreSQL');
    });
  
    pool.on('error', (err) => {
      console.error('❌ Unexpected error on idle client', err);
      process.exit(-1);
    });
  
    return pool;
  } catch (error) {
    console.log(`Failure connect pool intialized ${error}`);
    throw error;
  }
}

export const connect = async () => {
  if (!pool) {
    throw new Error(
      "Connection pool is not intialized. Call initPool() first."
    );
  } else {
    return pool.connect();
  }
}

export const close = async () => {
  try {
    if (pool) {
      await pool.end(); //Đợi tối đa 10s để đóng tất cả kết nối
      console.log("Database connection pool closed");
    }
  } catch (error) {
    console.log(`Error closing connection pool`, error);
    throw error;
  }
}

export const query = (text: string, params?: any[]) => {
  return pool?.query(text, params);
};

export default pool;
