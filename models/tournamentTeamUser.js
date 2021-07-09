"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class tournamentTeamUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tournamentTeamUser.belongsTo(models.tournamentTeam)
      tournamentTeamUser.belongsTo(models.user)
    }
  }
  tournamentTeamUser.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tournamentTeamId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "tournamentTeamUser",
    }
  )
  return tournamentTeamUser
}
