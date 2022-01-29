import mongoose from 'mongoose'
import date from 'date-and-time'

const now = new Date()

const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    category: {
      type: String,
      enum: ['Healthy', 'Junk'],
    },
    calories: {
      type: Number,
    },
    protein: {
      type: Number,
    },
    fat: {
      type: Number,
    },
    carbs: {
      type: Number,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

export default mongoose.model('Food', foodSchema)
