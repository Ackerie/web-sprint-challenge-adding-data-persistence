exports.seed = function(knex) {
    return knex('task').insert([
        {task_description: 'think of it', task_notes: 'in a min', task_compeleted: 1, project_id: 1},
        {task_description: 'think of it', task_notes: 'in a min', task_compeleted: 1, project_id: 2},
        {task_description: 'think of it', task_notes: 'in a min', task_compeleted: 1, project_id: 3}
    ])
}