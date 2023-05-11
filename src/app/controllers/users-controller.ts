import { NextFunction, Request, Response } from 'express'

import { User } from '../data'
import { IRepository } from '../repositories'

export class UsersController {
  private readonly _repository: IRepository<User>

  constructor(repository: IRepository<User>) {
    this._repository = repository
  }

  public async getAllUsers(request: Request, response: Response, next: NextFunction): Promise<any> {
    return this._repository
      .findAll()
      .then(users => response.status(200).send(users))
      .catch(error => response.status(500).send({ error: error }))
  }
}
