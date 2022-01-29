import Food from '../models/Food.js'
import date from 'date-and-time'

//Store food details from meal logger
const createFoodLog = async (req, res) => {
  const foodLog = new Food({
    ...req.body,
    // createdBy: req.user.id,
  })

  

  try {
    await foodLog.save()
    const dateString = date.format(foodLog.createdAt, 'YYYY-MM-DD')
    foodLog.date = dateString

    res.status(201).json({
      success: true,
      data: foodLog,
    })
  } catch (e) {
    console.log(e)
    res.status(400).json({
      success: false,
    })
  }
}

//get the protein carbs cal etc of particular date protein
const getFoodsOfDate = async (req, res) => {
  // const date = req.params.date
  try{
    const getFoodsOfDate= await Food.find({ date: req.params.date })
    res.json({
      success: true,
      data: getFoodsOfDate,
    })
  } catch(e) {
    res.status(400).json({
      success: false,
      message: e.message
    })
  }
}

export { createFoodLog, getFoodsOfDate }