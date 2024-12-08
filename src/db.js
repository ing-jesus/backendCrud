import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://jesuferpineda:GDOk9r8nWFrrxdlT@cluster0.ui1ie.mongodb.net/");
        console.log("Conexión exitosa con la base de datos")
    } catch (error) {
        console.log(error);
    }
}