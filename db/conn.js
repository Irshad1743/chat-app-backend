const mongoose = require("mongoose");
// "mongodb://127.0.0.1:27017/whatsapp"
mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log("Database Connection Successfully");
    })
    .catch((err) => {
        console.log("No Connection");
    })