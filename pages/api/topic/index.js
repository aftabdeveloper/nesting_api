import {create} from "@/controller/topic.controller"
const topic = (req,res)=>{
    if(req.method === "POST") return create(req,res)
    res.status(405).send("Method not allowed")
}

export default topic