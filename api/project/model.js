const db = require('../../data/dbConfig')

module.exports = {
  addProject,
  getProjects,
}

function addProject (project) {
  /* response example:
{
  "project_id":1,
  "project_name":"bar",
  "project_description":null,
  "project_completed":false
}
  */
}

function getProjects () {
  /* response example:
[{
  "project_id":1,
  "project_name":"bar",
  "project_description":null,
  "project_completed":false
}]
  */
}