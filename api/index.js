import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import featureHRoute from "./routes/feature-H_one.js";
import featureRRoute from "./routes/feature-R_two.js";



const app = express()
dotenv.config()

const connect = async() =>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("conneected to mongoDB.")
  } catch (error) {
    throw error;
  }
};


mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconncted1")

})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")

})

//for avoiding direct tesitng for api

app.use(express.json());


//middleware

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/feature-H_one",featureHRoute);
app.use("/api/feature-R_two",featureRRoute);


//making an optimized error handler

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


app.listen(8800, ()=>{
    connect()
    console.log("connected to backend")
})