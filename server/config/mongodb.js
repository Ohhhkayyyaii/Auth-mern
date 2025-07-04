import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));

  await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
};

export default connectDB;


/*
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    console.log("Trying to connect to:", mongoURI + "/mern-auth");

    await mongoose.connect(`${mongoURI}/mern-auth`);
    console.log("✅ Database Connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;*/