// const validate = (schema) => async (req, res, next) => {
//     console.log(schema);

//     try {
//         const parseBody = await schema.parse(req.body);
//         req.body = parseBody;
//         next();


//     }
//     catch (err) {
//         console.log(err); // Log the error object
//         const status = 422;
//         const message = "Fill the details correctly";

//         // const extraDetails = err.errors[0].message;
//         let extraDetails = '';

//         if (err.details && err.details.length > 0) {
//             extraDetails = err.details[0].message;
//         } else {
//             extraDetails = 'Unknown validation error';
//         }
//         console.log(message);
//         const error = {
//             status,
//             message,
//             extraDetails,
//         };
//         console.log(error);
//         next(error);
//     }
// }
// export default validate;
const validate =(schema)=>async(req,res,next)=>{

    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }
    catch(err){
        const status =422;
        const message = "fill the correct details ";
        const extraDetails =  err.errors[0].message;
        console.log(message );


const error= {
    status,
    message,
    extraDetails
};
console.log(error,"next ke pehele  wala error ");
next(error);
    }

};
export default validate;