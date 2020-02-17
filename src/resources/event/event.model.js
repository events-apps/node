const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true }
  },
  { timestamps: true }
)

export const Event = mongoose.model('event', eventSchema)
