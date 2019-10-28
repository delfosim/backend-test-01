'use strict'

const Schema = use('Schema')

class RoleTableSchema extends Schema {

  up () {
    this.create('role', (table) => {
      table.integer('id').primary().notNullable()
      table.integer('client_id').unsigned().references('client_id').inTable('client').notNullable()
      table.string('role_name', 255).notNullable()
    })
  }

  down () {
    this.drop('role')
  }

}

module.exports = RoleTableSchema
