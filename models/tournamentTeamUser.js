"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class tournamenTeamUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tournamenTeamUser.belongsTo(models.tournament)
      tournamenTeamUser.belongsTo(models.user)
      tournamenTeamUser.belongsTo(models.tournamentTeam)
    }
  }
  tournamenTeamUser.init(
    {
      tournament_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      tournamentTeam_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tournamenTeamUsers",
    }
  )
  return tournamenTeamUser
}
