const express = require("express");

const aplication = express();
aplication.use(express.json({ limit: "3mb" }));
aplication.use(express.urlencoded({ extended: true, limit: "10kb" }));

aplication.get("/", (req, res) => {
  res.json({
    success: true,
    status: 200,
    message: "Successfully connected to the server",
    data: null,
  });
});

//SERVER
module.exports = aplication;
