import express from 'express'

const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('API is up and running')
})

export { router as testRouter }
