let sequelize = require('sequelize');
let { DataTypes } = require('sequelize');
let env = 'development';
let dbConfig = require('./../config/db.config')[env];

let db = {};

db.connection = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  port: dbConfig.PORT,
  operatorAliases: 0,
});

db.sequelize = sequelize;
db.user = require('./User')(db.connection, DataTypes);
db.product = require('./Product')(db.connection, DataTypes);
db.category = require('./Category.js')(db.connection, DataTypes);
db.order = require('./Order')(db.connection, DataTypes);
db.cart = require('./Cart.js')(db.connection, DataTypes);

db.category.hasMany(db.product);
db.product.belongsTo(db.category);

db.user.hasMany(db.order);
db.order.belongsTo(db.user);

db.product.hasMany(db.order);
db.order.belongsTo(db.product);

db.cart.hasOne(db.user);
db.user.belongsTo(db.cart);

db.user.hasMany(db.order);
db.order.belongsTo(db.user);

db.product.belongsToMany(db.cart, { through: 'Product_Cart' });
db.cart.belongsToMany(db.product, { through: 'Product_Cart' });

module.exports = db;
