import ProductModel from "../models/productModel.js"


const getProducts = async(req,res)=>{
    try{
        const products =await ProductModel.find()

    }
    catch(err){

    }
}

const createProduct = async(req,res)=>{
    //we
}