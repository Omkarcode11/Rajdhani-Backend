module.exports = (connection, datatypes) => {
  let Product = connection.define('product', {
    id: {
      type: datatypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: datatypes.STRING,
      defaultValue : "Women Clothe Name"
    },
    price: {
      type: datatypes.BIGINT,
      defaultValue : 1099
    },
    description: {
      type: datatypes.STRING,
      defaultValue: "This is a clothe description and there is always added description by default because of default value "
    },
    quantity: {
      type: datatypes.BIGINT,
      defaultValue: 1,
    },
    img:{
      type : datatypes.STRING
    }
  });
  return Product;
};
