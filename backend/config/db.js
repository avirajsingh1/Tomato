import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://avirajsingh:9891922859@cluster0.jiie0bs.mongodb.net/food-del').then(()=> console.log("DB connected"))
}