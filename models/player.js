'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Player.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    position: DataTypes.STRING,
    number: DataTypes.INTEGER,
    image: DataTypes.STRING,
    user_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
    tableName: 'players',
  });
  return Player;
};