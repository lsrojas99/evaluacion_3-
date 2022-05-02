import { Router } from 'express'
import StartController from '../controllers/StartController'

const ideRoutes = Router()
const controller = new StartController()

ideRoutes.get('/info', controller.info)
ideRoutes.get('/ping', controller.ping)

export default ideRoutes