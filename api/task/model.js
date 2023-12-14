const db = require('../../data/dbConfig')

module.exports = {
  addTask,
  getTasks,
}

function makeBool (int) {
  return int === 0 ? false : true
}

async function addTask (task) {
  const id = await db('tasks').insert(task)
  const arr = await db('tasks').where('task_id', id[0])

  const newTask = {
    ...arr[0],
    task_completed: makeBool(arr[0].task_completed)
  }

  return newTask
}

async function getTasks () {
  const arr = await db('tasks as t')
    .join('projects as p', 't.project_id', '=', 'p.project_id')
    .select(
      'task_id', 
      'task_description', 
      'task_notes', 
      'task_completed', 
      'project_name', 
      'project_description',
    )
    
  const fixedArr = []

  arr.forEach(obj => {
    fixedArr.push({
      ...obj,
      task_completed: makeBool(obj.task_completed)
    })
  })

  return fixedArr
}
