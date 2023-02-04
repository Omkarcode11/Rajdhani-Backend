const developmentInstance = {
  DB: 'rajdhani',
  USER: 'root',
  PASSWORD: 'omkar',
  DIALECT: 'mysql',
  HOST: 'localhost',
  // PORT: 7825,
  POOL: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
const productionInstance = {
  DB: 'railway',
  USER: 'root',
  PASSWORD: 'Z0w4XVsTHU2Xr4zwnifb',
  DIALECT: 'mysql',
  HOST: 'containers-us-west-173.railway.app',
  PORT: 7825,
  POOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = {
  development: developmentInstance,
  production: productionInstance,
};
