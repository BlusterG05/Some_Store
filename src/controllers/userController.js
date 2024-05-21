// src/controllers/userController.js
const { pool } = require("../config/database");

const getUserByCed = async (req, res) => {
  const userCed = req.params.ced;
  try {
    const [rows] = await pool.query("CALL Get_User(?)", [userCed]);
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  const limit = req.query.max || 10;
  try {
    const [rows] = await pool.query("CALL Get_Users(?)", [parseInt(limit)]);
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { userName, userAge, userCed, userPhone, userMail, cityName } =
    req.body;
  try {
    await pool.query("CALL Create_user(?, ?, ?, ?, ?, ?)", [
      userName,
      userAge,
      userCed,
      userPhone,
      userMail,
      cityName,
    ]);
    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const userCed = req.params.ced;
  const { newUserName, newUserAge, newUserPhone, newUserMail, newCityName } =
    req.body;
  try {
    await pool.query("CALL Update_User(?, ?, ?, ?, ?, ?)", [
      userCed,
      newUserName,
      newUserAge,
      newUserPhone,
      newUserMail,
      newCityName,
    ]);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUserByCed, getUsers, createUser, updateUser };
