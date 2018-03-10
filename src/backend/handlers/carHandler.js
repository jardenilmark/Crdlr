async function addCar (db, request, response) {
  const car = request.bodyParser
  await db.collection('cars').insert(car)
  response.json({success: true})
}

async function getCarList (db, request, response) {
  const result = await db.collection('cars').find().toArray()
  response.json(result)
}

async function getBrands (db, request, response) {
  const result = await db.collection('cars').find({},
    { brand: 1 }).toArray()
  response.json(result)
}

async function getTypes (db, request, response) {
  const result = await db.collection('cars').find({},
    { type: 1 }).toArray()
  response.json(result)
}

async function getModels (db, request, response) {
  const result = await db.collection('cars').find({},
    { model: 1 }).toArray()
  response.json(result)
}

async function getLocations (db, request, response) {
  const result = await db.collection('cars').find({},
    { location: 1 }).toArray()
  response.json(result)
}

async function getAvailCars (db, request, response) {
  const body = request.bodyParser
  const result = await db.collection('cars').find({ body }).toArray()
  response.json(result)
}

module.exports = {
  getCars: (db, app) => {
    app
      .get('/addCar', (request, response) => {
        addCar(db, request, response)
      })
      .get('/carLists', (request, response) => {
        getCarList(db, request, response)
      })
      .get('/carBrands', (request, response) => {
        getBrands(db, request, response)
      })
      .get('/carTypes', (request, response) => {
        getTypes(db, request, response)
      })
      .get('/carModels', (request, response) => {
        getModels(db, request, response)
      })
      .get('/carLocations', (request, response) => {
        getLocations(db, request, response)
      })
      .get('/availCars', (request, response) => {
        getAvailCars(db, request, response)
      })
  }
}
