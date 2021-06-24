"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class tournamentTeam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tournamentTeam.belongsTo(models.team)
      tournamentTeam.belongsTo(models.tournament)
      tournamentTeam.belongsToMany(models.user, {
        through: "tournamentTeamUsers",
        foreignKey: "tournamentTeamId",
      })
    }
  }
  tournamentTeam.init(
    {
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      wins: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      defeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      draws: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      goals_taken: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      goals_done: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "tournamentTeam",
    }
  )
  return tournamentTeam
}
