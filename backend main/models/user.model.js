import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
  
username:{
    type:string,
    required:true,

},
email:{
    type:string,
    required:true
},
phone:{
    type:string,
    required:true
}



},{ timestamp:true})
export const User=mongoose.model("user",userSchema)