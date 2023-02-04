const { Op } = require('sequelize');
const db = require('./../model/index');

const searchProductByStr = async (req, res) => {
  let str = req.params.str;
  let products = await db.product.findAll({
    where: {
        name: {

            [Op.substring]: str,
        }
    },
  });
  res.status(200).send(products);
  res.end();
};

module.exports = { searchProductByStr };
