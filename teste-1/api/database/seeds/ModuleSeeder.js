'use strict'

/*
|--------------------------------------------------------------------------
| ModuleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ModuleSeeder {
  static async run () {
    // run model/database factories here
  	await Database.table('module').insert([
	  	{
	  		id: 1,
	  		name: 'Experimental',
	  		tag: 'experimental',
	  		route: '/experimental',
	  		group_id: 1
	  	},
	  	{
	  		id: 2,
	  		name: 'Experimental',
	  		tag: 'experimental',
	  		route: '/experimental2',
	  		group_id: 1
	  	},
	  	{
	  		id: 3,
	  		name: 'List',
	  		tag: 'list',
	  		route: '/list',
	  		group_id: 2
	  	},
	  	{
	  		id: 4,
	  		name: 'Overview',
	  		tag: 'overview',
	  		route: '/overview',
	  		group_id: 3
	  	},
	  	{
	  		id: 5,
	  		name: 'History',
	  		tag: 'history',
	  		route: '/history',
	  		group_id: 3
	  	},
	  	{
	  		id: 6,
	  		name: 'Alarms',
	  		tag: 'alarms',
	  		route: '/alarms',
	  		group_id: 3
	  	},
	  	{
	  		id: 7,
	  		name: 'Timeseries',
	  		tag: 'timeseries',
	  		route: '/timeseries',
	  		group_id: 1
	  	},
	  	{
	  		id: 8,
	  		name: 'Power Curve',
	  		tag: 'power_curve',
	  		route: '/power_curve',
	  		group_id: 1
	  	},
	  	{
	  		id: 9,
	  		name: 'Neighboring Devices',
	  		tag: 'neighboring_devices',
	  		route: '/neighboring_devices',
	  		group_id: 1
	  	},
	  	{
	  		id: 10,
	  		name: 'Error Predicted Values',
	  		tag: 'error_predicted_values',
	  		route: '/error_predicted_values',
	  		group_id: 1
	  	}
  	])
  }
}

module.exports = ModuleSeeder
