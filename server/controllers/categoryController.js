import CategoryModel from "../models/categoryModel.js"

const getCategories = async (req,res)=>{
    //we want to get all the categories
    // getCategories = middleware on path,middleware on(categoryRouter)
    //we use the CategoryModel and we call the find method on it
    //The find method allows to retrieve all the data from the CategoryModel
    //if there is no categories we send an error message
    // we also catch the error in the catch(err) and return it
    
    try{
        const categories = await CategoryModel.find()
        //if they no categories (=fault)we managed return err 
        //option1 shows on postman [] = empty (true value)
        /*if(!categories){
            return res.status(500).json({error:'No categories'})
        }*/
       //option2 on postman shows error message
       if(categories.length <1){
        return res.status(500).json({error:'No categories found'})
    
       }
        res.status(200).json(categories)
    }
    catch(err){
        console.log('Internal server error ',err)
        res.status(500).json({error: `${err.message}`})
    }
    }

    export {getCategories}