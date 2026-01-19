const express = require("express")
const connect = require("./utils/db")
require("dotenv").config()

const app = express();

const PORT = 3002;
const URL = process.env.MONGODB_URL

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connect(URL);

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})