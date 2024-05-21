// src/routes/userRoutes.js
const express = require("express");
const {
  getUserByCed,
  getUsers,
  createUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/user/:ced", getUserByCed);
router.get("/users", getUsers);
router.post("/user", createUser);
router.put("/user/:ced", updateUser);

module.exports = router;
