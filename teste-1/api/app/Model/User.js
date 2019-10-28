'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

	static get table() {
        return 'user'
    }

	client() {
		return this.belongsTo('App/Model/Client', 'id', 'client_id')
	}

	role() {
		return this.belongsTo('App/Model/Role', 'id', 'role_id')
	}
}

module.exports = User
