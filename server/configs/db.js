
const mongoose = require('mongoose');

module.exports = () => {
  
    return mongoose.connect("mongodb+srv://saurabh:srv123@cluster0.uf4pm.mongodb.net/data?retryWrites=true&w=majority");
}

//mongodb+srv://saurabh:srv123@cluster0.uf4pm.mongodb.net/data?retryWrites=true&w=majority
