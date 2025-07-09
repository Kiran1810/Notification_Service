'use strict';
const { fatal } = require('cli');
const{Enums}=require('../utils/common');
const{PENDING,FAILED,SUCCESS}=Enums.NOTI_ENUMS
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subject:{
      type:DataTypes.STRING,
      allowNull:false},
    
    content: {
      type:DataTypes.STRING,
      allowNull:false},

    RecepientEmail:{
      type: DataTypes.STRING,
      allowNull:false},

    status:{type: DataTypes.ENUM({
    values:["PENDING","FAILED","SUCCESS"],
  }),
    allowNull:false,
  defaultValue:"PENDING"}
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};