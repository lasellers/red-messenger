'use strict';

const db = require('../config/database.js');
const {DataTypes} = require('sequelize');

module.exports = db.define('message', {
    userId: DataTypes.NUMBER,
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    repliedTo: DataTypes.NUMBER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    tableName: 'Messages'
});

/*
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      // define association here
    }
  };
  Message.init({
    userId: DataTypes.NUMBER,
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    repliedTo: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
*/
