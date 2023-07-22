
import express from 'express';
import { login, loginUser, register } from '../controllers/userController.js';



//init router
const router = express.Router();

// route

router.post('/register',register)
router.post('/login',login)
router.post('/me',loginUser)



// Exports routers
export default router;
