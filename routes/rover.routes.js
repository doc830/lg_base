const {Router} = require('express')
const stream = require('../middleware/stream/stream')
const router = Router()

router.post('/weather', (req, res) => {
    res.status(200)
    stream.setData(req.body)
})
router.post('/visibility', (req, res) => {
    res.status(200)
    stream.setData(req.body)
})
router.post('/ubx-relposned',  async (req, res)=> {
    res.status(200)
   stream.setData(req.body)
})
router.post('/ubx-pvt',  async (req, res)=> {
    res.status(200)
    stream.setData(req.body)
})
router.post('/nmea', async (req, res)=> {
    res.status(200)
    stream.setData(req.body)
})
module.exports = router