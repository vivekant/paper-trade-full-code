import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true


},
symbol:{
    type:String,
    required:true
}





},{timestamps:true});

export const Position = mongoose.model("position", positionSchema);