import citymodel from "../model/citymodel.js";
let newdata = async(req, res)=>{
    let result = await citymodel.create(req.body);
    res.send({success: true, result});
}
let getalldata = async(req, res)=>{
    let result = await citymodel.find();
    res.send({success: true, result});
}
let getbyid= async(req, res)=>{
    let id = req.params.id;
    let result = await citymodel.find({_id : id });
    res.send({success: true, result});
}
let updatecategery = async(req, res)=>{
    let id = req.params.id;
    let result = await citymodel.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let deletedata = async(req, res)=>{
    let id = req.params.id;
    let result = await citymodel.deleteMany({_id : id});
    res.send({success: true, result});
}

export {newdata, updatecategery, deletedata, getalldata, getbyid};
