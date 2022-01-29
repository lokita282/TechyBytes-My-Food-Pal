import express from 'express'
import { createFoodLog, getFoodsOfDate } from '../controllers/food.js'
import auth from '../middleware/auth.js'

const router = new express.Router()

//create a product
router.post('/createLog', createFoodLog)

//get products
router.get('/get/:date', getFoodsOfDate)

export default router
