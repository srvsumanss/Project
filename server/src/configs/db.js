const mongoose = require("mongoose") ;

module.exports = () => {
    return mongoose.connect("mongodb+srv://saurabh:srv123@cluster0.uf4pm.mongodb.net/shoe?retryWrites=true&w=majority")
}