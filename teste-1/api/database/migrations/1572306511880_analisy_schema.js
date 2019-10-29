'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnalisySchema extends Schema {
  up () {
    this.create('analisy', (table) => {
      table.increments().primary().notNullable()
      table.bigInteger('sample_time').notNullable()
      table.float('value', 2, 2).notNullable()
    })
  }

  down () {
    this.drop('analisy')
  }
}

module.exports = AnalisySchema
