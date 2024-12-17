const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('notesdb', 'root', 'Hamo0111401250', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports =  sequelize;