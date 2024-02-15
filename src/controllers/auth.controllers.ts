import { Request, Response } from 'express'
import * as UserService from '../services/auth.services'
import { Role } from '../models/User'

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body

    const userFound = await UserService.isValidEmail(email)

    if (userFound.length)
      return res.status(400).json({
        message: `User with provided username or email already exists`,
      })

    if (!Object.values(Role).includes(role))
      return res.status(400).json({
        message: "Role must be 'admin' or 'user'",
      })

    const user = await UserService.register({
      name,
      email,
      password,
      role,
    })

    return res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Register failed - Error 500', error })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const { user, token } = await UserService.login({ email, password })

    return res.status(200).json({ user, token })
  } catch (error) {
    res.status(500).json({ message: 'Login failed - Error 500', error })
  }
}

export const protectedRoute = (req: Request, res: Response) => {
  try {
    res.send('This is a protected route')
  } catch (error) {
    res.status(500).json({ message: 'Route unauthorized - Error 500', error })
  }
}
