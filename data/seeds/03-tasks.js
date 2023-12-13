exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function() {
      return knex('tasks').insert([
        {
          task_description: 'Study material',
          project_id: 3
        },
        {
          task_description: 'Write database queries',
          task_notes: 'Also know how to insert, delete, and modify database entries',
          project_id: 1
        },
        {
          task_description: 'Design a database',
          task_notes: 'Use knex',
          project_id: 2
        }
      ])
    })
};