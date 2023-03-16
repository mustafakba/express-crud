import express from 'express';

import {createUser, deleteUser, getSingleUser, getUsers, updateUser} from "../controller/user.js";

const router = express.Router();

router.get("/",getUsers);
router.get("/:id",getSingleUser);
router.post("/",createUser);
router.delete("/:id",deleteUser);
router.put("/:id",updateUser);
export default router;