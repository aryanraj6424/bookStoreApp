import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";


import bokRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI;
// connet to mongoDB

try {
    mongoose.connect(URI)
        .then(() => console.log("Database Connected Successfully"))
        .catch((error) => console.log("MongoDB Connection Error:", error));
} catch (error) {
    console.log("Unexpected Error:", error);
}

//defining Route
app.use("/book", bokRoute)
app.use("/user",userRoute);

app.listen(PORT, ()=>{
    console.log("Server is  listening at ", PORT);
});