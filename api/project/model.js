const db = require('../../data/dbConfig')

module.exports = {
  addProject,
  getProjects,
}

async function addProject (project) {
  const id = await db('projects').insert(project)
  const newProject = await db('projects').where('project_id', id[0])

  return newProject[0]
}

function getProjects () {
  return db('projects')
}