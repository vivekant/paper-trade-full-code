import mongoose from "mongoose";

const watchlistSchema=new mongoose.Schema({
  

user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
},
number:{
    type:Number,
    required:true
},
name:{
    type:String,
   
}


},{ timestamps:true})
export const WatchlistNumber=mongoose.model("watchlist",watchlistSchema)