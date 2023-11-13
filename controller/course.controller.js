import "@/modules/db.js"
import Course from "@/schema/course.schema"

export const create = async (req,res)=>{
    try
    {
        const course = new Course(req.body)
        await course.save()
        res.status(200).json(course)
    }
    catch(err)
    {
        res.status(500).json({success: false})
    }
}