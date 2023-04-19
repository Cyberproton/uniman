import oracledb from 'oracledb';

export const CONNECTION_STRING = 'localhost/EE';

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
