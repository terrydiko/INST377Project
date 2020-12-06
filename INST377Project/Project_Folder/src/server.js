const express = require('express')
const app = express()
let whizzperRoute = require('./routes/whizzper')
const PORT = process.env.PORT || 3000
app.use(express.static('public'))

app.listen(PORT, ()=>{
    console.log('we are live')
})