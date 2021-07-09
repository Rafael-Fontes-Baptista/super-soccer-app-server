"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class tournamentUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tournamentUser.belongsTo(models.tournament)
      tournamentUser.belongsTo(models.user)
    }
  }
  tournamentUser.init(
    {
      tournamentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "tournamentUser",
    }
  )
  return tournamentUser
}
