
import userModels from "../models/userModels.js";
import createError from "../utility/createError.js";
import jwt from 'jsonwebtoken'
/**
 * @access public
 * @route /api/user/register
 * @method Get
 */

export const register = async (req,res,next) => {

   res.send('user rigster okay')

}
/**
 * @access public
 * @route /api/user/login
 * @method Get
 */

export const login = async (req,res,next) => {

   res.send('user login successful ')

}
