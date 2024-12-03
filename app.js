const express = require('express')
const config = require('config')
const cors = require('cors')
const server = express()
async function initialization () {
    await server.listen(config.get('port'))
}
initialization().then(()=>{
    console.log('Server started successfully on port ' + config.get('port') + '!')

}).catch((err)=>{
    console.error('Internal server error', err)
    process.exit(1)
})
server.use(express.json())
server.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization'
}))
server.use("/api/info", require("./routes/info.routes"))
server.use('/api/rover', require('./routes/rover.routes'))
server.use('/api/stream', require('./routes/stream.routes')) //enable navi data stream api




