import Service from "../models/service-model.js";

const services = async (req, res) => {
    try {
        const response = await Service.find();
        if (!response) {
            res.status(404).json({ message: "no service found " });
            return;
        }
        res.status(200).json({ message: response });



    }
    catch (error) {
        console.log(`services:${error}`);


    }
}

export default services;