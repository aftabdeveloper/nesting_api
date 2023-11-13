import mongoose, { mongo } from "mongoose";
const {Schema} = mongoose

const courseSchema = new Schema({
    name: {type: String, required: true},
    topics: [{type: Schema.ObjectId, ref: "Topic"}],
    price: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}
})

mongoose.models = {}
const Course = mongoose.model("Course", courseSchema)

export default Course
