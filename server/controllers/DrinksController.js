import { fakeDb } from '../db/fakeDb'
import { drinksService } from '../services/DrinksService'
import BaseController from '../utils/BaseController'

export class DrinksController extends BaseController {
  constructor() {
    super('api/drinks')
    this.router
      .get('', this.getAllDrinks)
      .get('/:id', this.getDrinks)
      .post('', this.createDrink)
  }

  getAllDrinks(req, res, next) {
    res.send(fakeDb.drinks)
  }

  async getDrinks(req, res, next) {
    try {
      const id = req.params.id
      const drinks = await drinksService.getDrinks(id)
      res.send(drinks)
    } catch (error) {
      next(error)
    }
  }

  async createDrink(req, res, next) {
    try {
      const newDrink = await drinksService.createDrink()
      res.send(newDrink)
    } catch (error) {
      next(error)
    }
  }
}
