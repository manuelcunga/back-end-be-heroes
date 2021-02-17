/*
 * Api be the heroes with postgres and node js
 * Author: Lázaro Inácio Manuel
 * criação da tabela incidents
 */

exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments()
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('valores').notNullable()

        // relacionamento


        table.string('ongs_id').notNullable()
        table.foreign('ongs_id').references('id').inTable('ongs')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};