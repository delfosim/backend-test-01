'use strict'

const Schema = use('Schema')

class ModuleTableSchema extends Schema {

  up () {
    this.create('module', (table) => {
      table.integer('id').primary().notNullable()
      table.string('name', 255).notNullable()
      table.string('tag', 255).notNullable()
      table.string('route', 255).notNullable()
      table.integer('group_id').unsigned().references('id').inTable('group').notNullable()
    })
  }

  down () {
    this.drop('module')
  }

}

module.exports = ModuleTableSchema
