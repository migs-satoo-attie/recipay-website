import { Client } from "pg";

async function query(queryObject: string) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
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