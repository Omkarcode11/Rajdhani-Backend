const express = require('express')
const searchRouter = express.Router()
const searchController = require('./../Controller/search.controller')



searchRouter.get('/:str',searchController.searchProductByStr)



module.exports = searchRouter 