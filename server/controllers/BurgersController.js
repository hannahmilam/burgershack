import { fakeDb } from '../db/fakeDb'
import { burgersService } from '../services/BurgersService'
import BaseController from '../utils/BaseController'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgershack')
    this.router
      .get('', this.getAllBurgers)
      .get('/:id', this.getBurger)
      .post('', this.createBurger)
  }

  getAllBurgers(req, res, next) {
    res.send(fakeDb.burgers)
  }

  async getBurger(req, res, next) {
    try {
      const id = req.params.id
      const burger = await burgersService.getById(id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const newBurger = await burgersService.createBurger(req.body)
      res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }
}
