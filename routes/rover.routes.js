const {Router} = require('express')
const stream = require('../middleware/stream/stream')
const router = Router()
router.post('/weather', (req, res) => {
    res.status(200)
    stream.setNavData(req.body)
})
router.post('/visibility', (req, res) => {
    res.status(200)
    stream.setNavData(req.body)
})
router.post('/ubx',  async (req, res)=> {
    res.status(200)
   stream.setNavData(req.body)
})
router.post('/nmea', async (req, res)=> {
    res.status(200)
    stream.setNavData(req.body)
})

module.exports = router