'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class RoleSeeder {
  static async run () {
    // run model/database factories here
  	await Database.table('role').insert([
	  	{
	  		id: 0,
	  		client_id: 2015,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 1,
	  		client_id: 54,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 2,
	  		client_id: 231,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 3,
	  		client_id: 229,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 4,
	  		client_id: 52,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 5,
	  		client_id: 39,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 6,
	  		client_id: 56,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 7,
	  		client_id: 2011,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 8,
	  		client_id: 60,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 9,
	  		client_id: 58,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 10,
	  		client_id: 48,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 11,
	  		client_id: 1780,
	  		role_name: 'Manager'
	  	},
	  	{
	  		id: 12,
	  		client_id: 1780,
	  		role_name: 'Worker'
	  	},
	  	{
	  		id: 13,
	  		client_id: 2011,
	  		role_name: 'Worker'
	  	}
  	])
  }
}

module.exports = RoleSeeder
