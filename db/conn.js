const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
    .then(() => {
        console.log("Database Connection Successfully");
    })
    .catch((err) => {
        console.log("No Connection");
    })