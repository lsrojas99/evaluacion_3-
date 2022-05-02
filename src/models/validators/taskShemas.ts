import Joi from 'joi'
import { CreateTaskDTO, UpdateTaskDTO } from '../dto/TaskDTO'

export const createTaskSchema: Joi.ObjectSchema<CreateTaskDTO> = Joi.object().keys({
  name: Joi.string().required(),
  type: Joi.string().required(),
  birth: Joi.date().required(),
  photo: Joi.string().uri()
})

export const updateTaskSchema: Joi.ObjectSchema<UpdateTaskDTO> = Joi.object().keys({
  name: Joi.string(),
  type: Joi.string(),
  birth: Joi.date(),
  photo: Joi.string().uri()
})