import mongoose from "mongoose";
import CategoryModel from "../models/categoryModel.js";
import  request  from "supertest";
import {app} from '../index.js'
import jest from 'jest'


//what we testing = controllers default to test
//supertest is a  library 
//main to test is jest

describe('Category endpoints', ()=>{
    beforeAll(async()=>{
        await mongoose.connect(process.env.MONGO_URI)
    })
    afterEach(async()=>{
        await CategoryModel.deleteMany()

    })
    afterAll(async()=>{
        await mongoose.connection.close()
    })
    it('should fetch all categories', async ()=>{
        const category1 =new CategoryModel ({name : 'Accessories', description:'Pet accessories'})
        const category2 =new CategoryModel ({name : 'Books', description:'Library'})
        await category1.save()
        await category2.save()

        const response =await request(app).get('/api/categories')
        expect(response.statusCode).toEqual(200)
        expect(response.body.length).toBe(2)
        expect(response.body[0]).toHaveProperty('name','Accessories')
        expect(response.body[1]).toHaveProperty('name','Books')



    });
});