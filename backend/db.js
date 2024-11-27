const mongoose = require('mongoose');


exports.connectToDb = ()=>{
    mongoose.connect("mongodb://localhost:27017").then(()=>{
               console.log("connected to mongod")
    }).catch((err)=>{
             console.log(err)
    })
}