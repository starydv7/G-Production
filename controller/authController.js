import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!(name && email && password && phone && address)) {
      return res.send({ error: "All field is required please fill" });
    }
    const existinguser = await userModel.findOne({ email: email });
    if (existinguser) {
      return res.status(200).send({
        success: true,
        message: "Already Logined",
      });
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
      err: err.message,
    });
  }
};
//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or Password",
      });
    }
    //chec user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
          .send({
              success: true,
              message: "Email is not registered"
          });
    }
      const match = await comparePassword(password, user.password);
      if (!match) {
          return res.status(404).send({
              success: true,
              message:"Invalid Password"
          })
      }

      //token
      const token = await JWT.sign({ _id: user._id }, proccess.env.JWT_SECRET, {
          expiresIn: "7d",
          
      })
      res.status(200).send({
          success: true,
          message: "login Successfull",
          user: {
              name: user.name,
              email: user.email,
              phone: user.phone,
              address: user.address
          },
          token,
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in login",
      error,
    });
  }
};
