const express = require("express");

const {createHistory, getUserHistory} = require("../controller/history.controller");

const router = express.Router();

router.get("/",getUserHistory);
router.post("/create", createHistory);

module.exports = {router};