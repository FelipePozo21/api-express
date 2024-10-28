const express = require('express')

const productRouter = express.Router()

productRouter.get('/', (req, res) => {
  res.json({
    name: 'product 1',
    price: 1200
  })
})

productRouter.get('/filter', (req, res) => {
  res.send('soy un filtro')
})

module.exports = {
  productRouter
}
