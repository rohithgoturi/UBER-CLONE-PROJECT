const mongoose = require("mongoose");

const connectToDB = ()=> {
    mongoose.connect(process.env.DB_CONNECT).then(()=> {
        console.log("connected to the database");
    }).catch((err)=> {
        console.log("error is encounter while connecting to the database", err)
    })
}

module.exports = connectToDB;