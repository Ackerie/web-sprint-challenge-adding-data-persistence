exports.seed = function(knex) {
    return knex('resources').insert([
        {resource_name: 'think of it', resource_description: 'in a min'}
        {resource_name: 'think of it', resource_description: 'in a min'}
        {resource_name: 'think of it', resource_description: 'in a min'}
    ])
}