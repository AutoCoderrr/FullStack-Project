import bcrypt from 'bcryptjs';
import User from '../models/user-model.js';



const home = async (req, res) => {

    try {
        res.status(200).send({ message: 'welcome to the project using api / router ' });

    } catch {
        console.log(error);
    }

}

const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: 'user already exist' })
        }
        const saltRound = 10;
        const hashpassword = await bcrypt.hash(password, saltRound);


        const userCreated = await User.create({ username, email, phone, password: hashpassword });

        // const data = req.body;

        res.status(201).json({
            message: "user created successfully ",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });

    } catch (err) {
        console.log("error", err)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        console.log(userExist);
        //check if user exists 
        if (!userExist) {
            return res.status(400).json({ message: "invalid credentials" });
        }

        const comparePassword = await bcrypt.compare(password, userExist.password);


        if (comparePassword) {
            res.status(200).json({
                message: "login successfully ",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
                //    console.log(User);
            });
        }
        else {
            res.status(401).json({ message: "invalid email password " });
        }
    }
    catch (error) {
        // console.log(error, 'error')
        next(error);
    }
};

//user logic to send user data 
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData)
        res.status(200).json({ userData });
    }
    catch (error) {
        console.log(error)
    }

}


export default { home, register, login, user };