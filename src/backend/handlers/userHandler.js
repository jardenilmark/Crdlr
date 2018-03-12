async function addUser (db, request, response) {
  const user = request.body
  console.log(user)
  await db.collection('users').insert(user)
  response.json({success: true})
}

module.exports = {
  getUsers: (db, app) => {
    app
      .post('/addUser', (request, response) => {
        addUser(db, request, response)
      })
  }
}
