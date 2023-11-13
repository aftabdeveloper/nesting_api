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

export const fetch = async(req,res)=>{
    const courses = await Course.find()
    res.status(200).json(courses)
}

export const fetchById = async (req,res)=>{
    try
    {
        const course = await Course.findById(req.query.id,{_id: 1, topics: 1})
        .populate('topics')
        res.status(200).json(course)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}