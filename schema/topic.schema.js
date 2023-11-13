import mongoose from "mongoose";

const {Schema} = mongoose

const topicSchema = new Schema({
    name: {type: String, required: true},   
    chapters: [{type: Schema.ObjectId, ref: "Chapter"}],
    createdAt: {type: Date, default: Date.now}
})

mongoose.models = {}
const Topic = mongoose.model("Topic", topicSchema)

export default Topic