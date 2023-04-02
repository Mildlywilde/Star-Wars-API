import express from 'express'
import axios from 'axios'

const router = express.Router()
const root = 'https://swapi.dev/api'

router.get('/people', async (req, res) => {
  let params = {}
  if (req.query.search) {
    params = { search: req.query.search }
  }
  const response = await axios.get(`${root}/people`, { params })
  res.send(response.data.results)
})

router.get('/planets', async (req, res) => {
  let params = {}
  if (req.query.search) {
    params = { search: req.query.search }
  }
  const response = await axios.get(`${root}/planets`, { params })
  res.send(response.data.results)
})

router.get('/films', async (req, res) => {
  let params = {}
  if (req.query.search) {
    params = { search: req.query.search }
  }
  const response = await axios.get(`${root}/films`, { params })
  res.send(response.data.results)
})

router.get('/starships', async (req, res) => {
  let params = {}
  if (req.query.search) {
    params = { search: req.query.search }
  }
  const response = await axios.get(`${root}/starships`, { params })
  res.send(response.data.results)
})

router.get('/vehicles', async (req, res) => {
  let params = {}
  if (req.query.search) {
    params = { search: req.query.search }
  }
  const response = await axios.get(`${root}/vehicles`, { params })
  res.send(response.data.results)
})

router.get('/species', async (req, res) => {
  let params = {}
  if (req.query.search) {
    params = { search: req.query.search }
  }
  const response = await axios.get(`${root}/species`, { params })
  res.send(response.data.results)
})

export { router as swRouter }
