'use strict'

const Schema = use('Schema')

class ClientTableSchema extends Schema {

  up () {
    this.create('client', (table) => {
      table.integer('client_id').primary().notNullable()
      table.string('client_name', 255).notNullable()
      table.string('client_tag', 255).notNullable()
    })
  }

  down () {
    this.drop('client')
  }

}

module.exports = ClientTableSchema
