const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('YOUR_DATABASE', 'root', 'YOUR_PASSWORD', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports =  sequelize;