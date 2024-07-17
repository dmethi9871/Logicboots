import mongoose from "mongoose";

const newslatterSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please provide Name"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
   
    
})

const newslatter = mongoose.models.newslatter || mongoose.model("newslatter", newslatterSchema);

export default newslatter;