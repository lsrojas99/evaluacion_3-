import { Request, Response } from "express"
import { CreateTaskDTO, UpdateTaskDTO, TaskDTO  } from "../models/dto/TaskDTO"
import { createTaskSchema, updateTaskSchema } from "../models/validators/taskShemas"
import TaskRepository  from "../models/repositories/TaskRepository"

export default class TaskController {
    public readonly getAll = async (_req: Request, res: Response) =>{
    const repository = new TaskRepository(1)
    const task: TaskDTO[] = await repository.findAll()
    res.json(task)
}

    public readonly getById = async (_req: Request, res: Response) =>{
        const { id } = _req.params
        const repository = new TaskRepository(1)
        const task = await repository.findById(parseInt(id))

        if (!task){
            res.status(404).json({message: 'Task no found'})
            return
        }
        res.json ( task )   
        }

        public readonly create = async (_req: Request, res: Response) =>{
           const task = _req.body as CreateTaskDTO  
            try {
          await createTaskSchema.validateAsync(task)
           } catch (error){
            res.status(400).json({message: error.message})
            return
           }
               const repository = new TaskRepository(1)

               const newTask = await repository.create(task)

               res.json(newTask)
            
           }

      public readonly update = async (_req: Request, res: Response) =>{
            const{ id } = _req.params
            const task = _req.body as UpdateTaskDTO

            try{
                await updateTaskSchema.validateAsync(task)
            } catch (error){
                res.status(400).json({message: error.message})
            return
        }    

        const repository = new TaskRepository(1)
        await repository.update(parseInt(id), task)

        res.sendStatus(204)
    }
                
        public readonly delete = async (_req: Request, res: Response) =>{
                    const { id } = _req.params
                    
                    console.log(' delete', id)
                    res.sendStatus(204)
                    }


                }