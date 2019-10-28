'use strict'

const Schema = use('Schema')

class ModuleClientTableSchema extends Schema {

  up () {
    this.create('module_client', (table) => {
      table.integer('id').primary().notNullable()
      table.integer('client_id').unsigned().references('client_id').inTable('client').notNullable()
      table.integer('module_id').unsigned().references('id').inTable('module').notNullable()
    })
  }

  down () {
    this.drop('module_client')
  }

}

module.exports = ModuleClientTableSchema
