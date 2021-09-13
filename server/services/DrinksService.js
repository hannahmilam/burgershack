import { fakeDb } from '../db/fakeDb'
import { BadRequest, NotFound } from '../utils/Errors'

class DrinksService {
  createDrink(drinkData) {
    const found = fakeDb.drinks.find(d => d.name === drinkData.name)
    if (found) {
      throw new BadRequest('drink already exists')
    }
    drinkData.id = Math.floor(Math.random() * 51)
    fakeDb.drinks.push(drinkData)
    return drinkData
  }

  getDrinks(id) {
    const found = fakeDb.drinks.find(d => d.id.toString() === id)
    if (!found) {
      throw new NotFound('no drink by that id' + id)
    }
    return found
  }
}
export const drinksService = new DrinksService()
