const db = require('../../data/dbConfig')

module.exports = {
  addResource,
  getResources,
}

async function addResource (resource) {
  const id = await db('resources').insert(resource)
  const createdResource = await db('resources').where('resource_id', id[0])

  return createdResource[0]
}

function getResources () {
  return db('resources')
}
