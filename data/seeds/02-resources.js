exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function() {
      return knex('resources').insert([
        {
          resource_name: 'w3schools',
          resource_description: 'Easy to understand instructions for coding.'
        },
        {
          resource_name: 'Debra',
          resource_description: 'Strong, loving, and funny'
        },
        {
          resource_name: 'toolbox',
          resource_description: 'drill, hammers, and other basic tools for construction'
        }
      ])
    })
};