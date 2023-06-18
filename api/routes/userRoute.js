
import express from 'express';
import { login, register } from '../controllers/userController.js';



//init router
const router = express.Router();

// route

router.post('/register',register)
router.post('/login',login)



// Exports routers
export default router;
