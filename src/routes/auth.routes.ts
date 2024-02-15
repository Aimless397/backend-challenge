import { Router } from 'express'
import { protectedRoute, register } from '../controllers/auth.controllers'
import { login } from '../controllers/auth.controllers'
import { verifyToken } from '../middleware/verifyToken'

const router: Router = Router()

router.post('/register', register)
router.post('/login', login)

router.get('/protected-route', verifyToken, protectedRoute) // Only for testing purposes

export default router
