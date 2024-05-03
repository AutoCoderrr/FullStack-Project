
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
