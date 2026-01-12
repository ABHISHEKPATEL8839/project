import mongoose from "../config/db.js";
let cateschema=mongoose.Schema({
    name:String
})
let catemodel=mongoose.model("categery",cateschema)
export default catemodel