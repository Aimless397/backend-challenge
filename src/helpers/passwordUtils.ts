import bcrypt from 'bcryptjs'

export const validatePassword = async (
  inputPassword: string,
  password: string
): Promise<boolean> => {
  return await bcrypt.compare(inputPassword, password)
}

export const encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10)

  return bcrypt.hash(password, salt)
}
