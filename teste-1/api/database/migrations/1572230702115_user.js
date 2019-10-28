'use strict'

const Schema = use('Schema')

class UserTableSchema extends Schema {

  up () {
    this.create('user', (table) => {
      table.integer('id').primary().notNullable()
      table.string('tpid', 500).notNullable()
      table.integer('client_id').unsigned().references('client_id').inTable('client').notNullable()
      table.string('user_name', 255).notNullable()
      table.integer('role_id').unsigned().references('id').inTable('role').notNullable()
      table.string('user_email', 255).notNullable()
      table.string('user_phone', 255).nullable()
      table.string('user_type', 255).notNullable()
      table.integer('creator_user_id').nullable()
      table.datetime('creation_time').notNullable()
      table.boolean('is_confirmed').notNullable()
      table.boolean('is_active').notNullable()
    })
  }

  down () {
    this.drop('user')
  }

}

module.exports = UserTableSchema
