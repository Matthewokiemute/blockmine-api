import express from "express";
import { createUser, deleteUser, getSingleUser, getUsers, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

// create new user
router.post("/", createUser);
// // update new user
// router.put("/:id", updateUser);
// // delete  user
// router.delete("/:id", deleteUser);
// // get single user
// router.get("/", getSingleUser);
// // get all users
// router.get("/", getUsers);

export default router;