'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {
  static async run () {
    // run model/database factories here
  	await Database.table('user').insert([
	  	{
	  		id: 49,
	  		tpid: 'bqc26ad6-7f2c-774d-bbc3-3mdkec53c636',
	  		client_id: 2015,
	  		user_name: 'user1_client_2015',
	  		role_id: 1,
	  		user_email: 'user@company2015.com',
	  		user_phone: '966225588',
	  		user_type: 'master',
	  		creator_user_id: '',
	  		creation_time: '2019-09-23 21:40:42.988472+00',
	  		is_confirmed: true,
	  		is_active: true
	  	},
	  	{
	  		id: 50,
	  		tpid: 'bqc26ad6-7f2c-774d-bbc3-3mdkec53c637',
	  		client_id: 54,
	  		user_name: 'user1_client_54',
	  		role_id: 2,
	  		user_email: 'user@company54.com',
	  		user_phone: '',
	  		user_type: 'master',
	  		creator_user_id: '',
	  		creation_time: '2019-09-23 21:40:42.988472+00',
	  		is_confirmed: true,
	  		is_active: true
	  	},
  	])
  }
}

module.exports = UserSeeder
