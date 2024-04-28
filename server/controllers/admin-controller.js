import { get } from 'mongoose';
import User from '../models/user-model.js';
import Contact from '../models/contactform-model.js';

///get ALL USERS 
const getAllUsers = async (req, res, next) => {
    try {
        //this query will return the data except the password 
        const users = await User.find({}, { password: 0 });
        console.log(users);

        if (!users || users.length === 0) {
            return res.status(404).json({ message: "user not found " });
        }
        res.status(200).json(users);

    }
    catch (error) {
        next(error);

    }

};


// Get user by id 
const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);

    }
    catch (error) {
        next(error);
    }
};

//GET ALL CONTACTS 
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();

        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "contact not found " })
        }

        res.status(200).json(contacts);
    }

    catch (error) {
        next(error);

    }
};
//DELETE USER BY ID 
const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({ message: "data deleted successfully" })

    }
    catch (error) {
        next(error);
    }
};
//update user by id 
const updateUserById = async (req, res, next) => {

    try {
        const id = req.params.id;
        const updateUserData = req.body;

        const userData = await User.updateOne({ _id: id }, {
            $set: updateUserData,
        }
        );
        return res.status(200).json(userData);

    }
    catch (error) {
        console.log(error);
        next(error);
    }
}
//contact USER BY ID 
const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({ message: "contact deleted successfully" })

    }
    catch (error) {
        next(error);
    }
};



export default { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById };