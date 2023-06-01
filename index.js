import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes
import userRoute from "./routes/user.route.js";
// import investmentRoute from "./routes/investment.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('DB Connected');
    } catch (err) {
        console.log('DB Connection failed');
    }
}


// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/register", userRoute)
// app.use("/invest", investmentRoute)


app.listen(port, () => {
    connectDB();
    console.log('Server is running on port', port);
});