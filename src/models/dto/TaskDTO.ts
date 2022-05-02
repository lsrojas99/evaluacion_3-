export interface BaseTaskDTO {
    id?: number
    name: string
    type: string
    birth: Date
    photo: string | null
    }
  
  export interface TaskDTO extends BaseTaskDTO {
    id: number
    userId: number | null
  }
  
  export interface CreateTaskDTO extends BaseTaskDTO {
    
  }
  
  export type UpdateTaskDTO = Partial<BaseTaskDTO>