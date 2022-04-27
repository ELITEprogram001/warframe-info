const express = require('express')
const NodeRouter = express.Router()
const {
    getNodeInfo,
} = require('../controllers/nodes')

NodeRouter.route('/').get(getNodeInfo)

module.exports = NodeRouter
