import {fetchById} from "@/controller/course.controller"
const course = (req,res)=>{
    if(req.method === "GET") return fetchById(req,res)
    res.status(405).send("Method not allowed")
}

export default course