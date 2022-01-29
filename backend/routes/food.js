import express from 'express'
import { createFoodLog, getFoodStats } from '../controllers/food.js'
import auth from '../middleware/auth.js'

const router = new express.Router()

//create a product
router.post('/createLog', auth, createFoodLog)

//get all foods stats
router.get('/get/:date', auth, getFoodStats)

export default router
