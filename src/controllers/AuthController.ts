import { Request, Response } from "express"
import { CreateUserDTO } from "../models/dto/UserDTO"
import UserRepository from "../models/repositories/UserRepository"
import { loginSchema } from "../models/validators/userShemas" 
import { registerSchema } from "../models/validators/userShemas"


export default class AuthController {
  public readonly login = async (req: Request, res: Response) => {
    const credentials = req.body

    try {
      await loginSchema.validateAsync(credentials)
    } catch (err) {
      res.status(400).json({ error: err.message })
      return
    }
    const repository = new UserRepository()
    const userFromDb = await repository.findByemail(credentials.email)
    
    if(!userFromDb || userFromDb.password !== credentials.password){
        res.status(401).json({message: 'invalid credentials'})
    }
    res.sendStatus(200)

  }
public readonly register = async (req: Request, res: Response) => {
    const user = req.body as CreateUserDTO

   
    try {
      await registerSchema.validateAsync(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
      return
    }

    const repository = new UserRepository()
    const newUser = await repository.create(user)

    res.status(201).json(newUser)
}
}
