const config = {
  development: {
    username: process.env.POSTGRES_USER || 'user',
    password: process.env.POSTGRES_PASSWORD || 'user',
    database: process.env.POSTGRES_DB || 'db',
    port: parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: process.env.POSTGRES_USER || 'user',
    password: process.env.POSTGRES_PASSWORD || 'a5GUG7WK2K0SOmZKLne8gRHUz8uvfEow',
    database: process.env.POSTGRES_DB || 'prod_db_wy7h',
    port: parseInt(process.env.DB_PORT) || 5432,
    host: process.env.DB_HOST || 'dpg-ctm0qvjtq21c73f5qoeg-a',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};

export default config;
