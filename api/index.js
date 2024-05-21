import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

const connectDb = async () => {
  const conn = await mongoose
    .connect(
      "mongodb+srv://sanikadev26:sanikadev26@cluster0.s2stgcy.mongodb.net/"
    )
    .then(() => {
      console.log("Connected to MongoDB!");
      console.log(process.env.MONGO);
    })
    
    .catch((err) => {
      console.log(err);
    });
};

connectDb();

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
  });