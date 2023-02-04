const developmentInstance = {
  DB: 'railway',
  USER: 'root',
  PASSWORD: 'Z0w4XVsTHU2Xr4zwnifb',
  DIALECT: 'mysql',
  HOST: 'containers-us-west-173.railway.app',
  PORT : 7825,
  POOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};



module.exports = {
     development : developmentInstance
}