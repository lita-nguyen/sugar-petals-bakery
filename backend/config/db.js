import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nhatlinh:1bqEUNc4y12d51I0@cluster0.1c2yqih.mongodb.net/sugar-petals-bakery').then(()=>console.log("DB Connected"));
}