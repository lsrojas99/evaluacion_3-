import { Task, PrismaClient } from "@prisma/client";
import { CreateTaskDTO, UpdateTaskDTO, TaskDTO } from "../dto/TaskDTO"

const prisma = new PrismaClient()

export default class TaskRepository {
  private userId: number

  constructor (userId: number) {
    this.userId = userId
  }
  
  public readonly findAll = async (): Promise<TaskDTO[]> => {
    const task: Task[] = await prisma.task.findMany({
      where: {
        userId: this.userId
      }
    })
    return task
  }
  
  public readonly findById = async (id: number): Promise<TaskDTO | undefined> => {
    const task = await prisma.task.findFirst({
      where: {
        id,
        userId: this.userId
      }
    })

    if (!task) return
    
    return task
  }

  public readonly create = async (task: CreateTaskDTO): Promise<TaskDTO> => {
    const newTask = await prisma.task.create({
      data: {
        ...task,
        birth: new Date(task.birth).toISOString(),
        userId: this.userId
      }
    })

    return newTask
  }

  public readonly update = async (id: number, task: UpdateTaskDTO): Promise<void> => {
    await prisma.task.updateMany({
      where: {
        id,
        userId: this.userId
      },
      data: {
        ...task,
        birth: task.birth ? new Date(task.birth).toISOString() : undefined
      }
    })
  }

  public readonly delete = async (id: number): Promise<void> => {
    await prisma.task.deleteMany({
      where: {
        id,
        userId: this.userId
      }
    })
  }
}