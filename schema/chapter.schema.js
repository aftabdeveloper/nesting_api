import mongoose from "mongoose";

const {Schema} = mongoose

const chapterSchema = new Schema({
    name: {type: String, required: true},
    size: {type: Number, required: true},
    duration: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}
})

mongoose.models = {}
const Chapter = mongoose.model("Chapter", chapterSchema)

export default Chapter