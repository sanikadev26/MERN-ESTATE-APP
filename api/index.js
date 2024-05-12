import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect("mongodb+srv://sanikadev26:sanika@mern-estate.mbdi362.mongodb.net/?retryWrites=true&w=majority&appName=MERN-ESTATE").then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err);
})

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
}
);