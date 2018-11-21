'use strict';
module.exports = (sequelize, DataTypes) => {
  const members = sequelize.define('members', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {});
  members.associate = function(models) {
    // associations can be defined here
  };
  return members;
};