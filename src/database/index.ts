import { Pool } from 'pg';
import * as PostgressConnectionStringParser from 'pg-connection-string';

import { config } from '../config';

const connection = PostgressConnectionStringParser.parse(config.databaseUrl);

export const pool = new Pool({
  host: connection.host,
  port: connection.port,
  database: connection.database,
  user: connection.user,
  password: connection.password
});
