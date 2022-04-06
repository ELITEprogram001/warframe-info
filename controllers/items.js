const Items = require('warframe-items')
const items = new Items({ category: ['Primary'] })

const getUniqueNameFromURL = (urlName) => {
    // return urlName.
}

const getAllItems = (req, res) => {
    
    const { p } = req.query
    page = items.slice((p - 1) * 30, p * 30)
    
    res.status(200).json({
        status: 'success',
        msg: `Retrieving the first 30 items`,
        data: {
            items: page
        }
    })
}

const getItem = (req, res) => {
    const { name } = req.params
    const itemJSON = items.find(item => {
        console.log(`searching item: ${item.uniqueName}`)
        return item.uniqueName == '/Lotus/Weapons/Corpus/LongGuns/ChainLightningGun/ChainLightningRifle'
    })
    res.status(200).json({
        status: 'success',
        msg: `Retrieving item ${name} information`,
        data: itemJSON
    })
}

module.exports = {
    getItem,
    getAllItems,
}