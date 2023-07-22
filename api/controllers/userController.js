
import User from "../models/userModels.js";
import createError from "../utility/createError.js";
import jwt from 'jsonwebtoken'
import { isEmail } from "../utility/validate.js";
import { hashPassword, passwordVerify } from "../utility/hash.js";
import { createToken } from "../utility/token.js";
import sentMail from "../utility/mail/sendMali.js";

/**
 * @access public
 * @route /api/user/register
 * @method Get
 */

export const register = async (req,res,next) => {

   try {
      // Get form data
      const { first_name, sur_name, email, password,birth_date,birth_month,birth_year,gender } = req.body;
      // Validation
      if( !first_name || !sur_name || !email || !password){ 
         next(createError(400,"All Fields are required"))
      }
      if ( !isEmail(email) ) {
         next(createError(400,"Invalid email adderess"))
      }
      const emailUser = await User.findOne({ email : email })
      if ( emailUser ) {
         next(createError(400,'Email already exits'))
      }
      // Create user
      const user = await User.create({
         first_name,
         sur_name,
         email,
         password:hashPassword( password ), birth_date,
         birth_month,
         birth_year,
         gender
      })
      // Create token
      
      if(user) { 
         const token = createToken({id : user._id},'365d')
         sentMail(
            user.email,
            'Varify Account',
            `Please verify Your account by click this <a href="#">LINK</a>`
         )
         res.status(200).json({
            message : "user create successful",
            user : user,
            token : token

         })
      }
   } catch (error) {
      next(error)
   }

}
/**
 * @access public
 * @route /api/user/login
 * @method Get
 */

export const login = async (req,res,next) => {

   try {
      
      const { email,password } = req.body

      // validate form
      if ( !email || !password ) {
         next(createError(400,"All fields are required"))
      }
      if ( !isEmail(email) ) {
         next(createError(400,"Invalid email adderess"))
      }

      const logeUser = await User.findOne({ email : email })

      if ( !logeUser ) {
         next(createError(400,"Login user not found"))
      }else{
  
         if ( !passwordVerify(password, logeUser.password) ) {
            next(createError(400,"Worg password"))
         }else{

            const token = createToken({id : logeUser._id},'365d')

            res.status(200).cookie('authToken', token).json({
               message : "user login successful",
               user : logeUser,
               token : token
            })
         }
         
      }

   } catch (error) {
      
   }

}
/**
 * @access public
 * @route /api/user/login
 * @method Get
 */

export const loginUser = async (req,res,next) => {

   res.send('user login successful ')


}
