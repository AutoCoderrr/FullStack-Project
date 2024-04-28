import { Schema, model, mongoose } from 'mongoose';


const contactSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

//create a modelor collection 

const Contact = new model("Contact", contactSchema);


export default Contact;