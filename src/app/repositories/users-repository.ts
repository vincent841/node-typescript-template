import { Repository } from 'typeorm'

import { User } from '../data'
import { appDataSource } from '../data-source'
import { IRepository } from './repository-interface'

export class UsersRepository implements IRepository<User> {
  public async findAll(): Promise<User[]> {
    const repository: Repository<User> = appDataSource.getRepository(User)
    return repository.find()
  }
}
