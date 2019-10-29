'use strict'

/*
|--------------------------------------------------------------------------
| ModuleClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ModuleClientSeeder {
  static async run () {
    // run model/database factories here
  	await Database.table('module_client').insert([
	  	{
	  		id: 0,
	  		client_id: 2015,
	  		module_id: 4
	  	},
	  	{
	  		id: 1,
	  		client_id: 2015,
	  		module_id: 5
	  	},
	  	{
	  		id: 2,
	  		client_id: 2015,
	  		module_id: 6
	  	},
	  	{
	  		id: 3,
	  		client_id: 2015,
	  		module_id: 7
	  	},
	  	{
	  		id: 4,
	  		client_id: 2015,
	  		module_id: 8
	  	},
	  	{
	  		id: 5,
	  		client_id: 2015,
	  		module_id: 9
	  	},
	  	{
	  		id: 6,
	  		client_id: 2015,
	  		module_id: 10
	  	},
	  	{
	  		id: 7,
	  		client_id: 2011,
	  		module_id: 4
	  	},
	  	{
	  		id: 8,
	  		client_id: 2011,
	  		module_id: 5
	  	},
	  	{
	  		id: 9,
	  		client_id: 2011,
	  		module_id: 6
	  	},
	  	{
	  		id: 10,
	  		client_id: 2011,
	  		module_id: 7
	  	},
	  	{
	  		id: 11,
	  		client_id: 2011,
	  		module_id: 8
	  	},
	  	{
	  		id: 12,
	  		client_id: 2011,
	  		module_id: 9
	  	},
	  	{
	  		id: 13,
	  		client_id: 1780,
	  		module_id: 5
	  	},
	  	{
	  		id: 14,
	  		client_id: 1780,
	  		module_id: 6
	  	},
	  	{
	  		id: 15,
	  		client_id: 1780,
	  		module_id: 7
	  	}
  	])
  }
}

module.exports = ModuleClientSeeder
