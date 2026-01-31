import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";

import { validateUser } from "../middlewares/validateUser.middleware.js";

const router = express.Router();

router.post("/", auth, createUser);
router.get("/", auth, authorize("admin"), getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
