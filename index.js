const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();


// CONNECTING MONGODB 
mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log("DB CONNECTION SUCCESSFULL !") )
.catch((err => {
console.log(err);
}  ))       


// PORT 
app.listen(process.env.PORT || 5000 , () => {
console.log("Backend server is running !");

}
    );
