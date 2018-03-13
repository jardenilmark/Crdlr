const secret = 'secret'

async function addUser (db, request, response) {
  const user = request.body
  console.log(user)
  await db.collection('users').insert(user)
  response.json({success: true})
}

async function loginUser (db, request, response, jwt) {
  const user = request.body
  const result = await db.collection('users').findOne(user)
  const token = jwt.sign(result, secret)
  response.json(token)
}

async function getUser (db, request, response, jwt) {
  const header = request.header('authorization')
  const user = jwt.verify(header.subString(7, header.length), secret)
  response.json(user)
}

module.exports = {
  getUsers: (db, app, jwt) => {
    app
      .post('/addUser', (request, response) => {
        addUser(db, request, response)
      })
      .post('/loginUser', (request, response) => {
        loginUser(db, request, response, jwt)
      })
      .get('/getUser', (request, response) => {
        getUser(db, request, response, jwt)
      })
  }
}
