
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128)
           .notNullable()
        tbl.text('project_description', 128)
        tbl.integer('project_completed')
            .unsigned() 
            .defaultTo(false)
           
  })


  .createTable('resources', tbl => {
    tbl.increments('resource_id')
    tbl.string('resource_name')
        .notNullable()
        .unique()
    tbl.text('resource_description')
  })


  .createTable('tasks', tbl => {
    tbl.increments('task_id')
    tbl.string('task_description', 128)
        .notNullable()
    tbl.text('task_note')
    tbl.integer('task_completed')
        .defaultTo(false)
        tbl.integer('project_id')
        .references('project_id')
        .inTable('projects')
        .notNullable()
        .unsigned()
  })


  .createTable('project_resources', tbl => {
      tbl.increments('project_resource_id')
      tbl.integer('project_id')
         .references('project_id')
         .inTable('projects')
         .notNullable()
         .unsigned()
     tbl.integer('task_id')
         .references('task_id')
         .inTable('tasks')
         .notNullable()
         .unsigned()
      tbl.integer('resource_id')
         .references('resource_id')
         .inTable('resources')
         .notNullable()
         .unsigned()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('project')
};
