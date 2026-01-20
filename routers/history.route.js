const express = require("express");

const {createHistory, getUserHistory} = require("../controller/history.controller");
const {isAuth} = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/:userId",isAuth, getUserHistory);
router.post("/create", isAuth, createHistory);

module.exports = {router};