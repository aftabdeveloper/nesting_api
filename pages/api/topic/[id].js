import {fetchById} from "@/controller/topic.controller"
const topic = (req,res)=>{
    if(req.method === "GET") return fetchById(req,res)
    res.status(405).send("Method not allowed")
}

export default topic