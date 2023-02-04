const { DataTypes } = require('sequelize');

module.exports = (connection, datatypes) => {
  let User = connection.define('user', {
    id: {
      type: datatypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: datatypes.STRING,
      allowNull: false,
    },
    address: {
      type: datatypes.STRING,
    },
    phone: {
      type: datatypes.BIGINT,
      unique: true,
    },
    pinCode: {
      type: datatypes.BIGINT,
    },
    role: {
      type: datatypes.STRING,
      defaultValue: 'user',
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    family_name: {
      type: DataTypes.STRING,
    },
    given_name: {
      type: DataTypes.STRING,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
    sub: {
      type: DataTypes.STRING,
    },
    updated_at: {
      type: DataTypes.STRING,
    },
    locale: {
      type: DataTypes.STRING,
    },
  });
  return User;
};
