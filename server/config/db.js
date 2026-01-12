import mongoose from "mongoose";
import { db_url } from "./conn.js";
mongoose.connect(db_url)
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log("db not connected",err)
})
export default mongoose