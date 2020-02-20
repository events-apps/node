import { crudControllers } from '../../utils/crud'
import { Event } from './event.model'

export const getMany = async (req, res) => {
  try {
    const searchRegex = new RegExp(req.query.search, 'i')
    const filter = req.query.search
      ? { $or: [{ name: searchRegex }, { description: searchRegex }] }
      : {}
    const docs = await Event.find(filter)
      .lean()
      .exec()

    res.status(200).json({ data: docs })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export default {
  ...crudControllers(Event),
  getMany
}
