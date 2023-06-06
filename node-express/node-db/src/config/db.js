import { Pool } from "pg"; 

const pool = new Pool({ 
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

export default { query: (text, params) => pool.query(text, params) };