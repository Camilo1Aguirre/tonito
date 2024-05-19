const express = require("express");
const controller = require("../controllers/user");
const router = express.Router();
const path = "user";

//**Ruta: /user GET */
router.get("/" + path, controller.getData);
router.post("/");

module.exports = router;
