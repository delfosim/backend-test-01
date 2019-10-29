'use strict'

/*
|--------------------------------------------------------------------------
| ModuleRoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ModuleRoleSeeder {
  static async run () {
    // run model/database factories here
  	await Database.table('module_role').insert([
	  	{
	  		id: 0,
	  		role_id: 1,
	  		module_id: 4
	  	},
	  	{
	  		id: 1,
	  		role_id: 1,
	  		module_id: 5
	  	},
	  	{
	  		id: 2,
	  		role_id: 1,
	  		module_id: 6
	  	},
	  	{
	  		id: 3,
	  		role_id: 1,
	  		module_id: 7
	  	},
	  	{
	  		id: 4,
	  		role_id: 1,
	  		module_id: 8
	  	},
	  	{
	  		id: 5,
	  		role_id: 1,
	  		module_id: 9
	  	},
	  	{
	  		id: 6,
	  		role_id: 1,
	  		module_id: 10
	  	},
	  	{
	  		id: 7,
	  		role_id: 8,
	  		module_id: 4
	  	},
	  	{
	  		id: 8,
	  		role_id: 8,
	  		module_id: 5
	  	},
	  	{
	  		id: 9,
	  		role_id: 8,
	  		module_id: 6
	  	},
	  	{
	  		id: 10,
	  		role_id: 8,
	  		module_id: 7
	  	},
	  	{
	  		id: 11,
	  		role_id: 8,
	  		module_id: 8
	  	},
	  	{
	  		id: 12,
	  		role_id: 8,
	  		module_id: 9
	  	},
	  	{
	  		id: 13,
	  		role_id: 12,
	  		module_id: 5
	  	},
	  	{
	  		id: 14,
	  		role_id: 12,
	  		module_id: 6
	  	},
	  	{
	  		id: 15,
	  		role_id: 12,
	  		module_id: 7
	  	},
	  	{
	  		id: 16,
	  		role_id: 14,
	  		module_id: 4
	  	},
	  	{
	  		id: 17,
	  		role_id: 14,
	  		module_id: 8
	  	},
	  	{
	  		id: 18,
	  		role_id: 13,
	  		module_id: 6
	  	},
	  	{
	  		id: 19,
	  		role_id: 0,
	  		module_id: 9
	  	},
	  	{
	  		id: 20,
	  		role_id: 0,
	  		module_id: 10
	  	}
  	])
  }
}

module.exports = ModuleRoleSeeder
