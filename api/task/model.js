const db = require('../../data/dbConfig')

module.exports = {
  addTask,
  getTasks,
}

function addTask (task) {
  // each task must include a name & description
  
  /* response example:
{
  "task_id":1,
  "task_description":"baz",
  "task_notes":null,
  "task_completed":false,
  "project_id":1
}
  */
}

function getTasks () {
  /* response example:
[{
  "task_id":1,
  "task_description":"baz",
  "task_notes":null,
  "task_completed":false,
  "project_name:"bar",
  "project_description":null
}]
  */
}
