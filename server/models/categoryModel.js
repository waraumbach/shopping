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
const CategoryModel =mongoose.model('Category', category)
export default CategoryModel

/*Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection 
and defines the shape of the documents within that collection.*/