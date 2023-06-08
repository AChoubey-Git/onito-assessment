export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  databaseConfig: {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_SCHEMA,
    entities: [],
    synchronize: true,
    autoLoadEntities: true
  },
  JWT_SECRET: process.env.JWT_SECRET,
  API_JWT_SECRET: process.env.API_JWT_SECRET,
});