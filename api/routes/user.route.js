import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get("/test", test);
router.post('/update/:id', verifyToken, updateUser)
// “When someone visits the website link /update/something using a POST request, run the updateUser function.”

export default router;
