import express from "express";
import {getUser} from "../Controllers/user.js";
const router = express.Router();
router.get("/find/:userId" , getUser)

export default router