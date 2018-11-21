'use strict';
module.exports = (sequelize, DataTypes) => {
  const teams = sequelize.define('teams', {
    name: DataTypes.STRING
  }, {});
  teams.associate = function(models) {
    // associations can be defined here
    teams.hasMany(models.members);
  };
  return teams;
};