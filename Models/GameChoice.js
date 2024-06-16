const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection.js');

class GameChoice extends Model {}

GameChoice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    tableName: "gamechoice",
  }
);

module.exports = GameChoice;

// Name
// Score