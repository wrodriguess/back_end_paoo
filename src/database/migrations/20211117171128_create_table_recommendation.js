
exports.up = function(knex) {
    return knex.schema.createTable('recommendation', function(table){
        table.increments('id')
        table.text('description').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('recommendation')
};
