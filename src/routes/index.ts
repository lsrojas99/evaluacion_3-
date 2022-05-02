import { Router } from 'express'
import ideRoutes from './IdeRoutes'
import taskRoutes from './taskRoutes'
import authRoutes from './authRoutes'

const modRoutes = Router()

modRoutes.use('/', ideRoutes)
modRoutes.use('/task', taskRoutes)
modRoutes.use('/auth', authRoutes)

export default modRoutes