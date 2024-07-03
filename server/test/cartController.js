import mongoose from "mongoose";
import CartModel from "../models/cartModel.js";
import  request  from "supertest";
import {app} from '../index.js'



//what we testing = controllers default to test
//supertest is a  library 
//main to test is jest

describe('Cart endpoints', ()=>{
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
        const cart1 =new CartModel ({name : 'Accessories', description:'Pet accessories'})
        const cart2 =new CartModel ({name : 'Books', description:'Library'})
        await cart1.save()
        await cart2.save()

        const response =await request(app).get('/api/cart')
        expect(response.statusCode).toEqual(200)
        expect(response.body.length).toBe(2)
        expect(response.body[0]).toHaveProperty('name','Accessories')
        expect(response.body[1]).toHaveProperty('name','Books')



    });
});