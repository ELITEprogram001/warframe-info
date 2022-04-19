const Items = require('warframe-items')
const items = new Items({
    category: ['Arcanes', 'Archwing', 'Arch-Gun', 'Arch-Melee',
               'Fish', 'Gear', 'Melee',
               'Pets', 'Primary', 'Relics', 'Resources',
               'Secondary', 'Sentinels']
})

const getUniqueNameFromURL = (urlName) => {
    // return urlName.
}

const getAllItems = (req, res) => {
    
    const { p, f } = req.query
    if(f) {
        let filteredCount = 0
        filteredItems = items.filter(item => {
            if(item.category === f) {
                filteredCount += 1
                return item
            }
        })
        console.log(`found ${filteredCount} items in category ${f}`)
        page = filteredItems.slice((p - 1) * 30, p * 30)
    } else {
        page = items.slice((p - 1) * 30, p * 30)
    }

    res.status(200).json({
        status: 'success',
        msg: `Retrieving 30 items`,
        data: {
            items: page
        }
    })
}

const getItem = (req, res) => {
    const { name } = req.params
    const itemJSON = items.find(item => {
        console.log(`searching item: ${item.uniqueName}`)
        return item.name == name
    })
    if(typeof itemJSON !== 'undefined') {
        res.status(200).json({
            status: 'success',
            msg: `Retrieving item ${name} information`,
            data: itemJSON
        })
    } else {
        res.status(404).json({
            status: 'failed',
            msg: `Unable to find item: ${name}`,
        })
    }
    
}

module.exports = {
    getItem,
    getAllItems,
}