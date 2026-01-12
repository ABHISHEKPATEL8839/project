import mongoose from "../config/db.js";
let Authschema=mongoose.Schema({
    usename:String,
    name:String,
    password:String
})
let Authmodel=mongoose.model("user",Authschema)
export default Authmodel