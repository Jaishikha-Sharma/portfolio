const express = require("express");
const cors = require("cors");

const {connectToDb} = require("./db.js")
const app = express();
app.use(express.json());
app.use(cors())


const PORT = 5000;



connectToDb();


app.listen(PORT,()=>{
    console.log("app is listing to 500")
}) 
app.get("/",(req,res)=>{
    res.send("HI , I am super talented JAishikha backend setup done")
})
