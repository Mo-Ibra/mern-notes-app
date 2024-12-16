const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('YOUR_DB', 'root', 'YOUR_ROOT_PASSWORD', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports =  sequelize;