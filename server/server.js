import dotenv from 'dotenv';

import express from 'express';
const app = express();
import cors from 'cors';
import router from './router/auth-router.js';
import contactRoute from './router/contact-router.js';
import connectdatabase from '../server/utils/db.js';
import errorMiddleware from './middleware/error-middleware.js';
import serviceRoute from './router/service-router.js';
import adminRoute from './router/admin-router.js';
// import contact
dotenv.config();
//add cors here 
const corsOptions ={
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,HEAD,PATCH,DELETE",
    credentials:true,
};
app.use(cors(corsOptions));
app.use(express.json());


app.use('/api/auth', router);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use("/api/contacts", adminRoute);

app.use(errorMiddleware);
//datatbase connection 
connectdatabase().then(() => {
    router.get('/', (req, res) => {
        res.status(200).send({ message: 'welcome to the project ' });

    });
})


// const PORT = 5000;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)

})

