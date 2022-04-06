const express = require('express')
const ItemRouter = express.Router()
const {
    getItem,
    getAllItems,
} = require('../controllers/items')

ItemRouter.route('/').get(getAllItems)
ItemRouter.route('/:name').get(getItem)

module.exports = ItemRouter