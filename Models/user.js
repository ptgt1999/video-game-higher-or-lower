const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection.js');

class User extends Model {}

User.init(
  {
    games: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
