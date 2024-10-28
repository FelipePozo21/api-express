const express = require('express')
const ProductsService = require('../services/products.service')

const productsRouter = express.Router()

const service = new ProductsService()

productsRouter.get('/', async (req, res) => {
  try {
    const products = await service.find()
    res.json(products)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

productsRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

productsRouter.post('/', async (req, res) => {
  try {
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

productsRouter.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)
    res.status(201).json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

productsRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const product = await service.delete(id)
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

module.exports = {
  productsRouter
}
