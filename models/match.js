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
      team_a: {
        type: DataTypes.STRING,
      },
      team_b: {
        type: DataTypes.STRING,
      },
      goals_team_a: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      goals_team_b: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      match_order: {
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
