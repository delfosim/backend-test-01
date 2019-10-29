'use strict'

/*
|--------------------------------------------------------------------------
| ClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ClientSeeder {
  static async run () {
    // run model/database factories here
  	await Database.table('client').insert([
	  	{
	  		client_id: 2015,
	  		client_name: 'Client1',
	  		client_tag: 'client_1'	
	  	},
	  	{
	  		client_id: 54,
	  		client_name: 'Client2',
	  		client_tag: 'client_2'	
	  	},
	  	{
	  		client_id: 231,
	  		client_name: 'Client3',
	  		client_tag: 'client_3'	
	  	},
	  	{
	  		client_id: 229,
	  		client_name: 'Client4',
	  		client_tag: 'client_4'	
	  	},
	  	{
	  		client_id: 52,
	  		client_name: 'Client5',
	  		client_tag: 'client_5'	
	  	},
	  	{
	  		client_id: 39,
	  		client_name: 'Client6',
	  		client_tag: 'client_6'	
	  	},
	  	{
	  		client_id: 56,
	  		client_name: 'Client7',
	  		client_tag: 'client_7'	
	  	},
	  	{
	  		client_id: 2011,
	  		client_name: 'Client8',
	  		client_tag: 'client_8'	
	  	},
	  	{
	  		client_id: 60,
	  		client_name: 'Client9',
	  		client_tag: 'client_9'	
	  	},
	  	{
	  		client_id: 58,
	  		client_name: 'Client10',
	  		client_tag: 'client_10'	
	  	},
	  	{
	  		client_id: 48,
	  		client_name: 'Client11',
	  		client_tag: 'client_11'	
	  	},
	  	{
	  		client_id: 1780,
	  		client_name: 'Client12',
	  		client_tag: 'client_12'	
	  	},
  	])
  }
}

module.exports = ClientSeeder
