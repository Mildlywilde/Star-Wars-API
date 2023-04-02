import express from 'express'
import cors from 'cors'
import { testRouter } from './routes/test.js'
import { swRouter } from './routes/starWars.js'

const app = express()
const port = 9000

app.use(cors())

app.listen(port, () => {
  console.log('Server Listening On Port 9000')
})

app.use('/test', testRouter)
app.use('/sw', swRouter)
