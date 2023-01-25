const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()


const PORT = config.get('port') || 3000

mongoose.set('strictQuery', true)
process.setMaxListeners(0)

async function start() {
    try{
        await mongoose.connect(config.get('mongoUri'))
        app.listen(3000, () => console.log("App has been started on port ${PORT}"))
    } catch (e) {
        console.log('Server is not working', e.message)
        process.exit(1)
    }
}

start()

