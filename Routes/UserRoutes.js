const express = require("express");
const UserController = require("../Controllers/UserController");

const router = express.Router();

router.get("/api/get_users", UserController.GetUsers);
router.post("/api/save_user", UserController.SaveUser);
router.post("/api/edit_user", UserController.EditUser);
router.post("/api/delete_user", UserController.DeleteUser);

module.exports = router;
