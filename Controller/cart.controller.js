const db = require('./../model/index')


const addProductToCart = async (req,res)=>{
    let info = req.body
    let product = await db.product.findByPk(info.productId)
    let cart   = await db.product.findByPk(info.cartId)
    let cardProduct = await cart.addCarts(product);
    res.status(200).json(cardProduct)
    res.end() 
}

const getAllCarts = async(req,res)=>{
    let allCarts = db.cart.findAll({include:db.product})
    res.status(200).json(allCarts);
    res.end()
}



module.exports ={addProductToCart,getAllCarts}