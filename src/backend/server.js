const express = require('express')
const mongoDb = require('mongodb').MongoClient
const carHandler = require('./handlers/carHandler')
const userHandler = require('./handlers/userHandler')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const path = require('path')
const url = 'mongodb://localhost:27017'
let db

async function startServer () {
  const app = express()
  const client = await mongoDb.connect(url)
  db = client.db('crdlr')

  app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use('/', express.static(path.join(process.cwd(), '../../public')))
    .listen(3000, () => { console.log('Server started at port 3000') })
  carHandler.getCars(db, app)
  userHandler.getUsers(db, app, jwt)
}

startServer()
