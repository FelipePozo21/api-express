const express = require('express')
const { productRouter } = require('./product.router')
const { productsRouter } = require('./products.router')
const { categoryRouter } = require('./category.router')
const { usersRouter } = require('./users.router')

function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/product', productRouter)
  router.use('/products', productsRouter)
  router.use('/category', categoryRouter)
  router.use('/users', usersRouter)
}

module.exports = routerApi
