const express = require('express')
const mongoDb = require('mongodb').MongoClient
const carHandler = require('./handlers/carHandler')
const userHandler = require('./handlers/userHandler')
const bodyParser = require('body-parser')
const path = require('path')
const url = 'mongodb://localhost:27017'
let db
async function addUser (request, response) {
  const user = request.body
  console.log(user)
  await db.collection('users').insert(user)
  response.json({success: true})
}

async function startServer () {
  const app = express()
  const client = await mongoDb.connect(url)
  db = client.db('crdlr')

  app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .post('/addUser', addUser)
    .use('/', express.static(path.join(process.cwd(), '../../public')))
    .listen(3000, () => { console.log('Server started at port 3000') })
  carHandler.getCars(db, app)
  // userHandler.getUsers(db, app)
}

startServer()
