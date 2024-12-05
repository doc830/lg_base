const {Router} = require('express')
const stream = require('../middleware/stream/stream')
const fs = require('fs')
const path = require('path')
const router = Router()

router.post('/weather', (req, res) => {
    res.status(200)
    stream.setData(req.body)
})
router.post('/visibility', (req, res) => {
    res.status(200)
    stream.setData(req.body)
})
router.post('/ubx',  async (req, res)=> {
    res.status(200)
    saveToFile('../logs/ubx.json', req.body)
        .then(() => {})
        .catch((err) => {
            console.error('Error saving user data:', err);
        })
   stream.setData(req.body)
})
router.post('/nmea', async (req, res)=> {
    res.status(200)
    saveToFile('../logs/ubx.json', req.body)
        .then(() => {})
        .catch((err) => {
            console.error('Error saving user data:', err);
        })
    stream.setData(req.body)
})
function saveToFile(filename, data) {
    const filePath = path.join(__dirname, filename)
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, fileContent) => {
            if (err && err.code !== 'ENOENT') {
                return reject(err)
            }
            let existingData = []
            if (!err) {
                try {
                    existingData = JSON.parse(fileContent)
                } catch (parseErr) {
                    return reject(parseErr)
                }
            }
            existingData.push(data)
            fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (writeErr) => {
                if (writeErr) {
                    return reject(writeErr)
                }
                resolve()
            })
        })
    })
}
module.exports = router