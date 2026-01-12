import mongoose from "../config/db.js";
let cityschema=mongoose.Schema({
    id:String,
    name:String,
    state:String
})
let citymodel=mongoose.model("cityy",cityschema)
export default citymodel