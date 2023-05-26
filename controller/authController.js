import userModel from "../models/userModel.js";
import {hashPassword} from "../helpers/authHelper.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        if (!(name && email && password && phone && address)) {
            return res.send({error:"All field is required please fill"})
        }
        const existinguser = await userModel.findOne({ email: email });
        if (existinguser) {
            return res.status(200).
                send({
                    success: true,
                    message: "Already Logined"
                })
          
        }
          const hashedPassword = await hashPassword(password);
          //save
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
        }).save();
        res.status(200).send({
            success: true,
            message: "user registed Successfully",
            user,
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            err:err.message
        })
    }
};
