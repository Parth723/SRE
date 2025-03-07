require('dotenv').config();
const { DataSource } = require('typeorm');

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], 
  migrations: ['dist/database/migrations/*.js'],
  synchronize: false,
  migrationsRun: false,
  logging: true,
});

module.exports = dataSource;
