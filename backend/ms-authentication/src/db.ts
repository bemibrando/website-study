import { Pool } from 'pg';

const connectionString = 'postgres://XXXXXX:XXXXXXXX@kesavan.db.elephantsql.com/dwrlnjrd';

const db = new Pool({ connectionString }); 

export default db;