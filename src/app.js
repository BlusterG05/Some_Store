// src/app.js
const express = require("express");
const { connectDB } = require("./config/database");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
