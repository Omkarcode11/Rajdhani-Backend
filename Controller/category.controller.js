const db = require('./../model/index');

const addCategory = async (req, res) => {
  let categories = await db.category.create({
    category: req.body.name,
  });
  res.status(200).json({ msg: 'Category added Successfully' });
  res.end();
};

//this is for get all categories
const getAllCategory = async (req, res) => {
  res.status(200).json({ msg: 'all Categories' });
  res.end();
};

//this is for suggestion
const getCategoryById = async (req, res) => {
  try {
    let categoryId = req.params.id;
    let category = await db.category.findOne({
      where: {
        id: categoryId,
      },
    });
    let getAllProduct = await category.getProducts({ offset: Math.floor(Math.random() * 20), limit: 15 });
    res.status(200).json(getAllProduct);
    res.end();
  } catch (err) {
    res.status(400).json(err);
    res.end();
  }
};

//this is for home page demo products
const getCategoryByManyIds = async (req, res) => {
  try {
    let categoryIds = req.body.ids;
    let allProducts = [];
    for (let i = 0; i < categoryIds.length; i++) {
      let category = await db.category.findOne({
        where: {
          id: categoryIds[i],
        },
      });
      let getAllProduct = await category.getProducts({ offset: Math.floor(Math.random() * 10), limit: 15 });
      allProducts.push(getAllProduct);
    }
    res.status(200).json(allProducts);
    res.end();
  } catch (err) {
    res.status(400).json(err);
    res.end();
  }
};

const searchByCategory = async (req, res) => {
  try {
    let categoryId = req.params.id;
    if (categoryId == 'all') {
      let getAllProduct = await db.product.findAll();
      res.status(200).json({ products: getAllProduct, category: 'All' });
      return;
    }
    let category = await db.category.findByPk(categoryId);
    let getAllProduct = await category.getProducts();
    res.status(200).json({ products: getAllProduct, category: category });
    res.end();
  } catch (err) {
    res.status(400).json(err);
    res.end();
  }
};

module.exports = { addCategory, getAllCategory, searchByCategory, getCategoryById, getCategoryByManyIds };
