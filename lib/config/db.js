import mongoose from "mongoose";
const uri = "mongodb+srv://db_admin:kShB94erY8lEDVfL@cluster0.btpfu.mongodb.net/next-blog-app";
export const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("✅ MongoDB Connected");
        // console.log(await mongoose.connection.db.listCollections().toArray());
    } catch (error) {
        console.error("❌ MongoDB connection failed:", err.message);
        process.exit(1);
    }
}