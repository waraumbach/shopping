import mongoose, { Schema } from "mongoose";

const category = new Schema({
    name: {
        type: String,
        required:true
    },
    description:{
        type: String,
        required: true
    }
})
mongoose.model('category', Category)
export default category

/*Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection 
and defines the shape of the documents within that collection.*/