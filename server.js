const express = require("express");
const dotenv = require("dotenv");

const app  = express();

dotenv.config();

app.get("/", (req,res) => {
    res.send("Express server!")
})


const server = app.listen(process.env.PORT || 5000, () => {
    console.log("Server is listeninng on port 5000.")
})