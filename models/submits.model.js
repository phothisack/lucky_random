const { DataTypes } = require('sequelize')

module.exports = model;

function model(sequelize) {
  const attributes = {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    village: { type: DataTypes.STRING, allowNull: false },
    district: { type: DataTypes.STRING, allowNull: false },
    province: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.INTEGER, allowNull: false },
    bil_number: { type: DataTypes.INTEGER, allowNull: false },
    bil_price: { type: DataTypes.INTEGER, allowNull: false },
    period: { type: DataTypes.INTEGER, allowNull: false },
    purchase_date: { type: DataTypes.STRING, allowNull: false },
    user_id: { type: DataTypes.INTEGER,allowNull: false}
  }
  return sequelize.define('Submit',attributes);
}