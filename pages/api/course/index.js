import {create} from "@/controller/course.controller"
const course = (req,res)=>{
    if(req.method === "POST") return create(req,res)
    return res.status(405).send("Method not allowed")
}
export default course