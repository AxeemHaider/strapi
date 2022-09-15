const sqlite = {
  client: 'sqlite',
  connection: {
    filename: '.tmp/data.db',
  },
  useNullAsDefault: true,
};

const postgres = {
  client: 'postgres',
  connection: {
    database: 'strapi',
    user: 'strapi',
    password: 'strapi',
    port: 5432,
    host: 'localhost',
  },
};

const mysql = {
  client: 'mysql',
  connection: {
    database: 'strapi-dev',
    user: 'admin',
    password: 'password',
    port: 3306,
    host: 'localhost',
  },
};

const db = {
  mysql,
  sqlite,
  postgres,
};

module.exports = {
  connection: db.mysql,
};
