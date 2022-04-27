function getNodeInfo(req, res) {
    res.status(200).send('node v1 test')
}

module.exports = {
    getNodeInfo,
}