import dotenv from "dotenv";
import { Pool, QueryResult } from "pg";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = {
  query: (text: string, params?: any[]): Promise<QueryResult<any>> => {
    return pool.query(text, params);
  },
};

export default db;
