const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection.js');

class GameChoice extends Model {}

GameChoice.init(
  {
    game: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    score: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'gamechoice',
  }
);

module.exports = GameChoice;
 
