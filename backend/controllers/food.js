import Food from '../models/Food.js'
import date from 'date-and-time'

//Store food details from meal logger
const createFoodLog = async (req, res) => {
  const foodLog = new Food({
    ...req.body,
    createdBy: req.user.id,
  })

  try {
    await foodLog.save()
    console.log(req.user.id)
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
      error: e.message,
    })
  }
}

//get the protein carbs cal etc of particular date protein
const getFoodStats = async (req, res) => {
  try {
    const getFoodStats = await Food.find({ date: req.params.date })
    console.log(getFoodStats)
    var totalCalories = 0
    var totalProteins = 0
    var totalCarbs = 0
    var totalFibres = 0

    getFoodStats.map((food) => {
      totalCalories += food.calories
      totalProteins += food.protein
      totalCarbs += food.carbs
      totalFibres += food.fibres
    })

    res.json({
      success: true,
      data: {
        totalCalories,
        totalProteins,
        totalCarbs,
        totalFibres,
      },
    })
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    })
  }
}

export { createFoodLog, getFoodStats }
