const express = require('express')
const config = require('config')

const router = require('./router/router')

const PORT = config.get('app.port') || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', (req, res) => { res.send('API Running !!!') })
app.use(router)

app.listen(PORT, () => {
  console.log(`Server Startd on Port ${PORT}`)
})
