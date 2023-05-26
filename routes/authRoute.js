import express from "express";
import {loginController, registerController } from "../controller/authController.js";

//router object

const router = express.Router();


//router object
//register ||method post

router.post("/register", registerController);


//LOGIN ||POST ||
router.post("/login",loginController);
export default router;