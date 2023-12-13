exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function() {
      return knex('projects').insert([
        {
          project_name: 'node-db1-project',
          project_description: 'Sprint 14 module 1'
        },
        {
          project_name: 'node-db2-project',
          project_description: 'Sprint 14 module 2'
        },
        {
          project_name: 'web-spring-challenge-adding-data-persistence',
          project_description: 'Sprint 14 final'
        }
      ])
    })
};