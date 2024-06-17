import mongoose, { Schema } from "mongoose";

const product = new Schema({
    name: {
        type: String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    images :[{
        type :String,
        
    }],
    categoryID:{
        type: new mongoose.Types.ObjectId, 
        ref:'Category',
        required : true
        
    },

})
const ProductModel=mongoose.model('Product', product)
export default ProductModel

/*Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection 
and defines the shape of the documents within that collection.*/

/*You can think of a Mongoose schema as the configuration object for a Mongoose model. 
A SchemaType is then a configuration object for an individual property. 
A SchemaType says what type a given path should have, whether it has any getters/setters, 
and what values are valid for that path. */