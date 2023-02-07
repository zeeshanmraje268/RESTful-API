const mongoose = require("mongoose");


const connectDB = async(url) => {
  return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected Successfully"))
    .catch((error) => console.log(error));
};

mongoose.set('strictQuery', true);
module.exports=connectDB;
