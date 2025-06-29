import mongoose from "mongoose";

const watchlistItemSchema = new mongoose.Schema({
   watchlist:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"watchlist"
   },
   symbol:{
    type:String,
    required:true
   }






}, { timestamps: true });
export const WatchlistItem = mongoose.model("watchlistitem", watchlistItemSchema);