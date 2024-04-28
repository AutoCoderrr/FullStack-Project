import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },

}, { timestamps: true });


userSchema.pre('save', async function (next) {
    //before savin the data in the data base this will run 
    // console.log("pre method",this);
    const user = this;
    if (user.isModified('Password')) {
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashpassword = bcrypt.hash(user.password, saltRound);
        user.password = hashpassword;

    }
    catch (error) {
        next(error);
    }

});

//json web token 
userSchema.methods.generateToken = async function () {

    try {
        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
            throw new Error("JWT_SECRET_KEY is not defined in environment variables");
        }
        //token expires in 30 days from the created dae 
        const expiresIn = 30 * 24 * 60 * 60; 
        const token = jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        }, secretKey, { expiresIn });

        return token;
    }
    catch (error) {
        console.log(error);
    }

};


const User = new mongoose.model("User", userSchema);

export default User;