import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

interface IConfig {
  port: number;
  debugLogging: boolean;
  dbsslconn: boolean;
  databaseUrl: string;
}

// tslint:disable
const databaseUrl =
  'postgres://ortshkawjinybi:449aa87d48692267b8c534de2cf56b9a1a47012ef319156f67030cf2aa28ddbc@ec2-54-228-246-214.eu-west-1.compute.amazonaws.com:5432/dc3g2opjsfhi0j';

const config: IConfig = {
  port: +process.env.PORT || 2323,
  debugLogging: process.env.NODE_ENV == 'development',
  dbsslconn: process.env.NODE_ENV != 'development',
  databaseUrl: process.env.DATABASE_URL || databaseUrl
};

export { config };
