import express from 'express'
import morgan from 'morgan'
import modRoutes from './routes'

const app = express()


app.use(express.json())
app.use(morgan('dev'))

app.use('/mod/v1',modRoutes)

app.use((_req, res) => {
    res.status(404).json({
      status: 404,
      message: 'Not Found'
    })
  })
  

export default app

