"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      match.belongsTo(models.tournament)
    }
  }
  match.init(
    {
      teamA: {
        type: DataTypes.STRING,
      },
      teamB: {
        type: DataTypes.STRING,
      },
      goalsTeamA: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      goalsTeamB: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      matchOrder: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "match",
    }
  )
  return match
}
