import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT
const HOST = process.env.HOST
const DATABASE = process.env.DATABASE
const USERNAME_OA = process.env.USERNAME_OA
const PASSWORD = process.env.PASSWORD

console.log(PORT)
export const sequelizeOa: Sequelize = new Sequelize(
  DATABASE,
  USERNAME_OA,
  PASSWORD,
  {
    host: HOST,
    port: parseInt(PORT as string, 10),
    dialect: 'mssql',
    dialectOptions: {
      options: {
        requestTimeout: 15000,
        multiSubnetFailover: true
      }
    }
  }
);
