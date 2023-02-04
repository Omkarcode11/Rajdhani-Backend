let express = require('express')
let orderRouter = express.Router()
let orderController = require('./../Controller/order.controller')



orderRouter.post('/add',orderController.addOrder)
orderRouter.post('/',orderController.getOrderByUser)



module.exports = orderRouter