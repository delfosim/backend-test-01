'use strict'

const Schema = use('Schema')

class ModuleRoleTableSchema extends Schema {

  up () {
    this.create('module_role', (table) => {
      table.integer('id').primary().notNullable()
      table.integer('role_id').unsigned().references('id').inTable('role').notNullable()
      table.integer('module_id').unsigned().references('id').inTable('module').notNullable()
    })
  }

  down () {
    this.drop('module_role')
  }

}

module.exports = ModuleRoleTableSchema
