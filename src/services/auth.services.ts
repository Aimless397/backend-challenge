import { LoginUser } from '../dtos/request/loginUser.interface'
import { RegisterUser } from '../dtos/request/registerUser.interface'
import { encryptPassword, validatePassword } from '../helpers/passwordUtils'
import User, { Role } from '../models/User'
import { Unauthorized } from 'http-errors'
import jwt from 'jsonwebtoken'

export const register = async (input: RegisterUser) => {
  const newUser = User.build()

  newUser.name = input.name
  newUser.email = input.email
  newUser.password = await encryptPassword(input.password)
  newUser.role = input.role as unknown as Role

  const user = await newUser.save()

  return user
}

export const isValidEmail = async (email: string) => {
  const userFound = await User.findAll({
    where: { email },
  })

  return userFound
}

export const login = async (input: LoginUser) => {
  const user = await User.findOne({
    where: { email: input.email },
    rejectOnEmpty: false,
  })

  if (!user) throw new Unauthorized('Invalid credentials')

  const isPasswordValid = await validatePassword(input.password, user.password)

  if (!isPasswordValid) throw new Unauthorized('Invalid credentials')

  const token = jwt.sign(
    {
      id: user.idUser, // I only stored the idUser for security purposes
    },
    process.env.TOKEN_SECRET!,
    {
      expiresIn: '2h',
    }
  )

  return { user, token }
}
