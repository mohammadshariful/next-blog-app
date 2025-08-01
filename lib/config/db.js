import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/next-blog-app")
    console.log("MongoDB connected successfully");
}