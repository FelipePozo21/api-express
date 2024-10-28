const express = require('express')

const categoryRouter = express.Router()

categoryRouter.get('/', (req, res) => {
  res.send('categorias')
})

categoryRouter.get('/:categoryId/products/:productId', (req, res) => {
  console.log('as')
  const { categoryId, productId } = req.params
  res.json({
    name: 'product 1',
    price: 1200,
    categoryId,
    productId
  })
})

module.exports = {
  categoryRouter
}
