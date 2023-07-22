
import  jwt  from "jsonwebtoken"
/**
 * Create token jwt
 */
export const createToken = (payload, exp) => {

    // create new token
    const token = jwt.sign(payload,process.env.JWT_SECRET, {
        expiresIn : exp
    })

    return token;
} 