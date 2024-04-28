import { z } from 'zod';



const signupSchema = z.object({
    username: z.string({ required_error: " username is required" }).trim().min(3, { message: "name must be of minimum three character " }).max(255, { message: "maximum " }),
    email: z.string({ required_error: "email is required" }).email("invalid email ").trim().min(3, { message: "email must be of minimum three character " }),
    phone: z.string({ required_error: " phone is required" }).trim().min(3, { message: "phone must be of atleast 10  character " }),
    password: z.string({ required_error: " password is required" }).min(3, { message: "password must be of minimum three character " }).max(1000, { message: "password canot be graeater than 1000 characters " }),
});
// this is for login alert 


export default  signupSchema;