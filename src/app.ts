import express, { Request, Response, Application } from 'express'
import morgan from 'morgan'
import { db } from './database/database'
import authRoutes from './routes/auth.routes'

const app: Application = express()

app.use(morgan('dev'))
app.use(express.json())

const dbFunctions = async () => {
  try {
    await db.sync()
    console.log('DB SYNC')

    await db.authenticate()
    console.log('DB AUTHENTICATED')
  } catch (error) {
    console.log('DB AUTHENTICATE ERROR')
  }
}

dbFunctions()

app.get('/hello', (req: Request, res: Response) => {
  res.send('hello')
})

app.use('/api/', authRoutes)

export default app
