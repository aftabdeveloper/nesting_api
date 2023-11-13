import "@/modules/db.js"
import Topic from "@/schema/topic.schema"

export const create = async (req,res)=>{
    try
    {
        const topic = new Topic(req.body)
        await topic.save()
        res.status(200).json(topic)
    }
    catch(err)
    {
        res.status(500).json({success: false})
    }
}