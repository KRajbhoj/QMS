module.exports = {
    development: {
        username: "sa",
        password: "12345678",
        database: "token_management",
        options : {
            host: "isupportdb.cpqos03jbn8s.ap-south-1.rds.amazonaws.com",
            dialect: 'postgres'
        }
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'mysql',
    }
  };