import "@/modules/db.js"
import Chapter from "@/schema/chapter.schema"

export const create = async (req,res)=>{
    try
    {
       const chapter = new Chapter(req.body)
       await chapter.save()
       res.status(200).json(chapter)
    }
    catch(err)
    {
        res.status(500).json({success: false})
    }
    
}

