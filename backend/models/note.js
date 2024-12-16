const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Note = sequelize.define('note', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [5, 100],
    }
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [5, 1000],
    }
  }
}, {
  timestamps: true,
});

module.exports = Note;