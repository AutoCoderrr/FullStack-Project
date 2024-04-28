 
 import jwt from 'jsonwebtoken';
 import User from '../models/user-model.js';

 const authMiddleware=async(req, res,next)=>{

    const token = req.header('Authorization');
if(!token){
    return res.status(401).json({message:"unauthorized HTTP, token not provided "});

}
console.log("token from auth middleware ",token);


const jwtToken = token.replace("Bearer","").trim();
console.log("token from auth middleware ",jwtToken);
//VERIFYING THE SECRET  KEY FROM THEBACKEND 
try{
const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);


// get the entire data from backend 
const userData= await User.findOne({email:isVerified.email}).select({password:0});
console.log(userData);
req.user= userData;
req.tken = token;
req.userID= userData._id;

next();
}

catch(error){
    return res.status(401).json({message:"unauthorized invalid token  "});
};



};

export default authMiddleware;