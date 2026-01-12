import mongoose from "../config/db.js";
let subcategeryschema=mongoose.Schema({
    name:String,
    category:{type: mongoose.Schema.Types.ObjectId,ref:"category"}
},{timestrap:true})



let subcatemodel=mongoose.model("scategery",subcategeryschema)
export default subcatemodel