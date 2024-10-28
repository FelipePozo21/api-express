const express = require('express')
const ProductsService = require('../services/products.service')

const productsRouter = express.Router()

const service = new ProductsService()

productsRouter.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})

productsRouter.get('/:id', (req, res) => {
  const { id } = req.params
  const product = service.findOne(id)
  res.json(product)
})

productsRouter.post('/', (req, res) => {
  const body = req.body
  res.status(201).json({
    message: 'created',
    data: body
  })
})

productsRouter.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  res.json({
    message: 'update',
    data: body,
    id
  })
})

productsRouter.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    message: 'delete',
    id
  })
})

module.exports = {
  productsRouter
}
