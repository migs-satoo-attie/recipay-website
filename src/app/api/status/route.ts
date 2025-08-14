import { metadata as homeMetadata } from 'src/app/layout';
import database from "infra/database"

export async function GET(request: Request, response: Response) {
  const updatedAtResult = new Date().toISOString();
  const databaseName = process.env.POSTGRES_DB;
  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseMaxConnectionsResult = await database.query("SHOW max_connections")
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName]
});
const databaseSgbdName = await database.query("SELECT * FROM pg_stat_activity;")
  return Response.json({ 
    updatedAt: updatedAtResult,
    web: {
      name: homeMetadata.title,
      description: homeMetadata.description,
    },
    database: { 
    database_server: process.env.PGDATABASE,
    database_sgbd: databaseSgbdName.rows[0].datname,
    database_version: databaseVersionResult.rows[0].server_version,
    database_max_connections: databaseMaxConnectionsResult.rows[0].max_connections,
    database_opened_connections: databaseOpenedConnectionsResult.rows[0].count,
   } });
}
