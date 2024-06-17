import { Router } from "express";
import CategoryModel from "../models/categoryModel.js";
import { getCategories } from "../controllers/categoryController.js";

// we create the category router
const categoryRouter =Router()



//we defined the different routes
categoryRouter.get('/categories', getCategories)//It get all the categories
//middleware getCategories from Controller

export default categoryRouter