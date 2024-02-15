import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface IPayload {
  idUser: string
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('authorization-token')

    if (!token)
      return res.status(401).json({ message: 'The token has expired' })

    const payload = jwt.verify(token, process.env.TOKEN_SECRET!) as IPayload

    req.idUser = payload.idUser

    next() // Enables the next function
  } catch (error) {
    return res.status(401).json({ message: 'The token has expired' })
  }
}
