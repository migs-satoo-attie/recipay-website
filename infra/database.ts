import { Client } from "pg";

async function query(queryObject: string) {
  const client = new Client({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT ? Number(process.env.PGPORT) : undefined,
    database: process.env.PGDATABASE,
    ssl: process.env.NODE_ENV === "development" ? false : true,
  });

  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  } catch (error: any) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
}

export default{
  query: query,
}