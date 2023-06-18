import expresss from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js'
import mongoDBconnect from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'



// init expresss
 const app = expresss();
 dotenv.config();

// middlewares 
app.use(expresss.json());
app.use(expresss.urlencoded({ extended : false }));
app.use(cookieParser());
// app.use(cors())

// init env variables
const PORT = process.env.SERVER_PORT

// routes 
app.use('/api/v1/user', userRoute);



// Express errorhandler
app.use( errorHandler )


 // listen server
 app.listen( PORT, () => {
    mongoDBconnect();
    console.log(`Server is runing on port ${PORT}`.bgGreen.black);
 })