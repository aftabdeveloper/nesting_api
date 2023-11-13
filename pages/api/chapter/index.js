import {create} from "@/controller/chapter.controller"
const chapter = (req,res)=>{
    if(req.method === "POST") return create(req,res)
    res.status(405).send("Method not allowed")
}

export default chapter