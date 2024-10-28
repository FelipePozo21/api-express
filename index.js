const express = require('express')
const routerApi = require('./routes')

const { logErrors, errorHandler } = require('./middleware/error.handler')

const app = express()

const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hola mi server en express')
})

routerApi(app)

app.use(logErrors)
app.use(errorHandler)

app.get('*', (req, res) => {
  res.send('404 not found')
})

app.listen(port, () => {
  console.log('ready')
})
