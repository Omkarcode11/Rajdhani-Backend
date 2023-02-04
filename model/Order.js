const { DataTypes } = require('sequelize');

module.exports = (connection, datatypes) => {
  let Order = connection.define('order', {
    id: {
      type: datatypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: datatypes.STRING,
      allowNull: false,
    },
    payment: {
      type: datatypes.BOOLEAN,
      defaultValue: false,
    },
    paymentMethod: {
      type: datatypes.STRING,
      allowNull: false,
    },
    totalBill: {
      type: datatypes.BIGINT,
      allowNull: false,
    },
    totalQuantity: {
      type: datatypes.BIGINT,
      allowNull: false,
    },
    phone: {
      type: datatypes.BIGINT,
      allowNull: false,
    },
  });
  return Order;
};
