const {Router} = require('express')
const router = Router()
const player = require('../middleware/stream/player')
const stream = require('../middleware/stream/stream')
router.get('/start',  (req, res)=> {
    res.setHeader('Connection', 'keep-alive')
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Access-Control-Allow-Origin": "*"
    })
    let newPlayer = new player (res)
    stream.addPlayer(newPlayer)
    res.on('close', async () => {
        stream.removePlayer(newPlayer)
        res.end()
    })
})
module.exports = router