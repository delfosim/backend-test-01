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
	    "id": 49,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c636",
	    "client_id": 2015,
	    "user_name": "user1_client_2015",
	    "role_id": 1,
	    "user_email": "user@company2015.com",
	    "user_phone": 966225588,
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-23 21:40:42.988472+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 50,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c637",
	    "client_id": 54,
	    "user_name": "user1_client_54",
	    "role_id": 2,
	    "user_email": "user@company54.com",
	    "user_phone": "",
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-23 21:40:42.988472+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 51,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c638",
	    "client_id": 231,
	    "user_name": "user1_client_231",
	    "role_id": 3,
	    "user_email": "user@company231.com",
	    "user_phone": "",
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-23 21:40:42.988472+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 52,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c639",
	    "client_id": 229,
	    "user_name": "user1_client_229",
	    "role_id": 4,
	    "user_email": "user@company229.com",
	    "user_phone": "",
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-23 21:40:42.988472+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 53,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c640",
	    "client_id": 52,
	    "user_name": "user1_client_52",
	    "role_id": 5,
	    "user_email": "user@company52.com",
	    "user_phone": "",
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-23 21:40:42.988472+00",
	    "is_confirmed": true,
	    "is_active": false
	  },
	  {
	    "id": 54,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c641",
	    "client_id": 39,
	    "user_name": "user1_client_39",
	    "role_id": 6,
	    "user_email": "user@company39.com",
	    "user_phone": "",
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-23 21:40:42.988472+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 55,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c642",
	    "client_id": 56,
	    "user_name": "user1_client_56",
	    "role_id": 7,
	    "user_email": "user@company56.com",
	    "user_phone": "",
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-23 21:40:42.988472+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 56,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c643",
	    "client_id": 2011,
	    "user_name": "user1_client_2011",
	    "role_id": 8,
	    "user_email": "user1@company2011.com",
	    "user_phone": "",
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-23 21:40:42.988472+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 57,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c644",
	    "client_id": 60,
	    "user_name": "user1_client_60",
	    "role_id": 9,
	    "user_email": "user@company60.com",
	    "user_phone": "",
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-23 21:40:42.988472+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 58,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c645",
	    "client_id": 58,
	    "user_name": "user1_client_58",
	    "role_id": 10,
	    "user_email": "user@company58.com",
	    "user_phone": "",
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-23 21:40:42.988472+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 59,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c646",
	    "client_id": 48,
	    "user_name": "user1_client_48",
	    "role_id": 11,
	    "user_email": "user@company48.com",
	    "user_phone": "",
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-23 21:40:42.988472+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 63,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c647",
	    "client_id": 1780,
	    "user_name": "user1_client_1780",
	    "role_id": 12,
	    "user_email": "user1@company1780.com",
	    "user_phone": 999887766,
	    "user_type": "master",
	    "creator_user_id": "",
	    "creation_time": "2019-09-25 19:22:06.625607+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 64,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c648",
	    "client_id": 1780,
	    "user_name": "user2_client_1780",
	    "role_id": 13,
	    "user_email": "user2@company1780.com",
	    "user_phone": "",
	    "user_type": "minion",
	    "creator_user_id": 63,
	    "creation_time": "2019-09-25 20:31:05.117361+00",
	    "is_confirmed": true,
	    "is_active": false
	  },
	  {
	    "id": 61,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c649",
	    "client_id": 2011,
	    "user_name": "user2_client_2011",
	    "role_id": 14,
	    "user_email": "user2@company2011.com",
	    "user_phone": 911223344,
	    "user_type": "minion",
	    "creator_user_id": 56,
	    "creation_time": "2019-09-24 20:37:29.097151+00",
	    "is_confirmed": true,
	    "is_active": true
	  },
	  {
	    "id": 79,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c650",
	    "client_id": 2011,
	    "user_name": "user3_client_2011",
	    "role_id": 14,
	    "user_email": "user3@company2011.com",
	    "user_phone": "",
	    "user_type": "minion",
	    "creator_user_id": 56,
	    "creation_time": "2019-09-30 18:53:45.392376+00",
	    "is_confirmed": false,
	    "is_active": false
	  },
	  {
	    "id": 80,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c651",
	    "client_id": 2011,
	    "user_name": "user4_client_2011",
	    "role_id": 14,
	    "user_email": "user4@company2011.com",
	    "user_phone": "",
	    "user_type": "minion",
	    "creator_user_id": 56,
	    "creation_time": "2019-09-30 18:55:54.677735+00",
	    "is_confirmed": false,
	    "is_active": false
	  },
	  {
	    "id": 81,
	    "tpid": "bqc26ad6-7f2c-774d-bbc3-3mdkec53c652",
	    "client_id": 2011,
	    "user_name": "user5_client_2011",
	    "role_id": 14,
	    "user_email": "user5@company2011.com",
	    "user_phone": "",
	    "user_type": "minion",
	    "creator_user_id": 56,
	    "creation_time": "2019-09-30 20:17:09.338008+00",
	    "is_confirmed": false,
	    "is_active": false
	  }
	])
  }
}

module.exports = UserSeeder
