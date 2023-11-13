import mongoose from "mongoose";

const {Schema} = mongoose

const topicSchema = new Schema({
    name: {type: String, required: true},
    duration: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}
})

mongoose.models = {}
const Topic = mongoose.model("Topic", topicSchema)

export default Topic