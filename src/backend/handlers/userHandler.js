async function addUser (db, request, response) {
  const user = request.bodyParser
  await db.collection('users').insert(user)
  response.json({success: true})
}

module.exports = {
  getCars: (db, app) => {
    app
      .post('/addUser', (request, response) => {
        addUser(db, request, response)
      })
  }
}
