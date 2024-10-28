const { faker } = require('@faker-js/faker')
// console.log(faker)
class ProductsService {
  constructor () {
    this.products = []
    this.generate()
  }

  generate () {
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      })
    }
  }

  async create (data) {
    if (!data) {
      throw new Error('no data')
    }
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  async find () {
    return new Promise((resolve, reject) => {
      if (!this.products) {
        throw new Error('products not found')
      }
      setTimeout(() => {
        resolve(this.products)
      }, 5000)
    })
  }

  async findOne (id) {
    const name = this.getTotal()
    const find = this.products.find(item => item.id === id)
    if (!id || !find) {
      throw new Error('product not found')
    }
    return find
  }

  async update (id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('product not found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }

  async delete (id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('product not found')
    }
    this.products.splice(index, 1)
    return {
      message: 'delete',
      id
    }
  }
}

module.exports = ProductsService
