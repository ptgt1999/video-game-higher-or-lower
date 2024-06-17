const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'dpg-cpo69508fa8c739mpdeg-a.ohio-postgres.render.com',
    port:5432,
    dialect: 'postgres',
    dialectOptions:{
      ssl:{
      }
    }
  }
);


module.exports = sequelize;
