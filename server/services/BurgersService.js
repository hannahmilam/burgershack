import { fakeDb } from '../db/fakeDb'
import { BadRequest, NotFound } from '../utils/Errors'

class BurgersService {
  createBurger(burgerData) {
    const found = fakeDb.burgers.find(b => b.name === burgerData.name)
    if (found) {
      throw new BadRequest('burger already exists')
    }
    burgerData.id = Math.floor(Math.random() * 50)

    fakeDb.burgers.push(burgerData)
    return burgerData
  }

  getById(id) {
    const found = fakeDb.burgers.find(b => b.id.toString() === id)
    if (!found) {
      throw new NotFound('no burger by that id' + id)
    }
    return found
  }
}
export const burgersService = new BurgersService()
