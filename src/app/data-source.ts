import { DataSource } from 'typeorm'

const ormConfig = require('../../ormconfig.json')
export const appDataSource = new DataSource(ormConfig)
