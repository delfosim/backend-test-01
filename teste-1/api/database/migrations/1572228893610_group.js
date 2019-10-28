'use strict'

const Schema = use('Schema')

class GroupTableSchema extends Schema {

  up () {
    this.create('group', (table) => {
      table.integer('id').primary().notNullable()
      table.string('name', 255).notNullable()
      table.string('tag', 255).notNullable()
      table.string('route', 255).notNullable()
      table.integer('hierarchy_level').notNullable()
    })
  }

  down () {
    this.drop('group')
  }

}

module.exports = GroupTableSchema
