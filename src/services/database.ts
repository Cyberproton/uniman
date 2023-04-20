import oracledb from 'oracledb';

const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
const DATABASE_PORT = process.env.DATABASE_PORT || 1521;
const DATABASE_SID = process.env.DATABASE_SID || 'orcl';
const CONNECTION_STRING = `${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_SID}`;

export const getConnection = async (
  username: string,
  password: string,
  asDba = false,
) => {
  return oracledb.getConnection({
    user: username,
    password: password,
    connectString: CONNECTION_STRING,
    privilege: asDba ? oracledb.SYSDBA : undefined,
  });
};
