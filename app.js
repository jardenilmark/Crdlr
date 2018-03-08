const express = require('express')
const mongoDb = require('mongodb').MongoClient
// const ObjectId = require('mongodb').ObjectId
const bodyParser = require('body-parser')
const path = require('path')
const url = 'mongodb://localhost:27017'
let db

async function addCar (request, response) {
  const car = request.bodyParser
  await db.collection('cars').insert(car)
  response.json({success: true})
}

async function startServer () {
  const app = express()
  const client = await mongoDb.connect(url)
  db = client.db('crdlr')

  app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .post('/addCar', addCar)
    .use('/', express.static(path.join(process.cwd(), 'public')))
    .listen(3000, () => { console.log('Server started at port 3000') })
}

startServer()
