const express = require('express')
const app = express()
const ItemRouter = require('./routes/items')
const NodeRouter = require('./routes/nodes')
require('dotenv').config()
const port = process.env.PORT || 5055

app.use(express.json())
app.use('/imgs', express.static('imgs'))
app.use('/', express.static('build'))

app.use('/api/v1/items', ItemRouter)
app.use('/api/v1/nodes/', NodeRouter)

app.get('/api/v1', (req, res) => {
    res.json({
        status: "success",
        msg: "You've reached the API.",
    })
})

// app.use('*', ) Display static 404 page with link back to Home page

async function startServer() {
    app.listen(port, () => {
        console.log(`server listening on port ${port}`)
    })
}

startServer();