const db = require('../../data/dbConfig')

module.exports = {
  addProject,
  getProjects,
}

function makeBool (int) {
  return int === 0 ? false : true
}

async function addProject (project) {
  const id = await db('projects').insert(project)
  const arr = await db('projects').where('project_id', id[0])
  const newProject = {
    ...arr[0],
    project_completed: makeBool(arr[0].project_completed)
  }
  return newProject
}

async function getProjects () {
  const arr = await db('projects')
  const fixedArr = []

  arr.forEach(obj => {
    fixedArr.push({
      ...obj,
      project_completed: makeBool(obj.project_completed)
    })
  })

  return fixedArr
}