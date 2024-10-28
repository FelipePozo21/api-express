const express = require('express')

const usersRouter = express.Router()

usersRouter.get('/', (req, res) => {
  const { limit, offset } = req.query

  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  }
  res.send('No hay query')
})

module.exports = {
  usersRouter
}
