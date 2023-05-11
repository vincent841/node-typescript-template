import 'reflect-metadata'

import * as dotenv from 'dotenv'

import { Application } from './app'
import { appDataSource } from './app/data-source'

dotenv.config()

appDataSource
  .initialize()
  .then(() => {
    const application: Application = new Application()
    application.startServer()
  })
  .catch(err => {
    console.log(err)
  })
