'use strict'

/*
|--------------------------------------------------------------------------
| GroupSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class GroupSeeder {
  static async run () {
    // run model/database factories here
  	await Database.table('group').insert([
	  	{
	  		id: 1,
	  		name: 'Experimental',
	  		tag: 'exp-rimental',
	  		route: '/prototype',
	  		hierarchy_level: 0
	  	},
	  	{
	  		id: 2,
	  		name: 'User Management',
	  		tag: 'user-management',
	  		route: '/user-management',
	  		hierarchy_level: 0
	  	},
	  	{
	  		id: 3,
	  		name: 'Main',
	  		tag: 'main',
	  		route: '/main',
	  		hierarchy_level: 0
	  	}
  	])
  }
}

module.exports = GroupSeeder
