import express from "express";
import {loginController, registerController, testController } from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
//router object

const router = express.Router();


//router object
//register ||method post
router.post("/register", registerController);
//LOGIN ||POST ||
router.post("/login", loginController);
//test routes
router.get("/test", requireSignIn,isAdmin,testController);
export default router;