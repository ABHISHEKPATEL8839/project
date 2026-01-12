import mongoose from "../config/db.js";

let userschema=mongoose.Schema({
 name:String,
 email:String,
 password:String,
 city:String,
 address:String,
 gender:String,
 contact:String

 
},{timestamps:true})
let usermodel=mongoose.model("user",userschema)
export default usermodel