// import validate from "./validate-middleware";

const errorMiddleware = (err, req, res, next) => {
    // const status = err.status || 500;
    // const message = err.message || "backend error ";
    // const extraDetails = err.extraDetails || "backend error try again later ";
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    const extraDetails = err.extraDetails || "Unknown error occurred";



    return res.status(status).json({ message, extraDetails });

}

export default errorMiddleware;
