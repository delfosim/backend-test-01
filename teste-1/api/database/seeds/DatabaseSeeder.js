'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const ClientSeeder = require('./ClientSeeder')
const GroupSeeder = require('./GroupSeeder')
const ModuleSeeder = require('./ModuleSeeder')
const RoleSeeder = require('./RoleSeeder')
const ModuleRoleSeeder = require('./ModuleRoleSeeder')
const ModuleClientSeeder = require('./ModuleClientSeeder')
const UserSeeder = require('./UserSeeder')
const AnalisySeeder = require('./AnalisySeeder')

class DatabaseSeeder {
  async run () {
    await ClientSeeder.run()
    await GroupSeeder.run()
    await ModuleSeeder.run()
    await RoleSeeder.run()
    await ModuleRoleSeeder.run()
    await ModuleClientSeeder.run()
    await UserSeeder.run()
    await AnalisySeeder.run()
  }
}

module.exports = DatabaseSeeder
