async function addCar (db, request, response) {
  const car = request.bodyParser
  await db.collection('cars').insert(car)
  response.json({success: true})
}

async function getCarList (db, request, response) {
  const result = await db.collection('cars').find().toArray()
  response.json(result)
}

async function getFilteredList (db, request, response) {
  const para = request.params.para
  const result = await db.collection('cars').find({},
    { [para]: 1 }).toArray()
  response.json(result)
}

async function getAvailCars (db, request, response) {
  const para = request.params.para
  const arr = para.split(',')
  let data = {}
  arr.forEach(element => {
    const array = element.split(':')
    data[array[0]] = array[1].substring(1, array[1].length - 1)
  })
  const result = await db.collection('cars').find(data).toArray()
  response.json(result)
}

module.exports = {
  getCars: (db, app) => {
    app
      .post('/addCar', (request, response) => {
        addCar(db, request, response)
      })
      .get('/carLists', (request, response) => {
        getCarList(db, request, response)
      })
      .get('/getCar/:para', (request, response) => {
        getFilteredList(db, request, response)
      })
      .get('/availCars/:para', (request, response) => {
        getAvailCars(db, request, response)
      })
  }
}
