const { Op } = require('sequelize');
const db = require('./../model/index');

const addProduct = async (req, res) => {
  let productInfo = req.body;
  let product = await db.product.create({
    name: productInfo.name,
    price: productInfo.price,
    description: productInfo.description,
  });
  let category = await db.category.findOne({ where: { category: productInfo.category } });
  category.addProducts(product);
  res.status(200).json({ msg: 'Product Added' + product });
  res.end();
};


const addProducts = async(req,res)=>{
  let products = req.body.products
  let product = await db.product.bulkCreate(products)
  let category = await db.category.findByPk(2)
  await category.addProducts(product)
   res.status(200).json({success:"products added successfully"})
   res.end()
}


const getAllProduct = async (req, res) => {
  let allProduct = await db.product.findAll();
  res.status(200).json(allProduct);
  res.end();
};

const editProduct = async (req, res) => {
  let productInfo = req.body;
  let findProduct = await db.product.findOne({
    where: {
      id: productInfo.id,
    },
  });
  if (!findProduct) {
    res.status(404).json({ msg: 'product not found' });
    return;
  }
  let product = await db.product.update(productInfo, {
    where: {
      id: productInfo.id,
    },
  });
  res.status(200).json({ msg: 'Product is updated successfully' });
  res.end();
};

const getProductById = async (req, res) => {
  let productId = req.params.id;
  let product = await db.product.findOne({
    where: {
      id: productId,
    },
  });
  res.status(200).json(product);
  res.end;
};

const getProductsByIds = async (req, res) => {
  let productIds = req.body.id;
  let products = await db.product.findAll({
    where: {
      id : productIds,
    },
  });

  res.status(200).json(products);
  res.end();
};


const deleteProducts = (req,res)=>{
  let product = req.body.id
  let deleteProducts  = db.product.destroy({where:{
    id:1
  }})
  res.status(300).send('item deleted')
  res.end()
}


module.exports = { addProduct, getAllProduct, editProduct, getProductById, getProductsByIds,addProducts , deleteProducts };
