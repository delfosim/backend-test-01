'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

	static get table() {
        return 'user'
    }

    static get incrementing() {
    	return false
    }

    static get primaryKey() {
    	return 'id'
    }

    static get createdAtColumn() {
    	return null
    }

    static get updatedAtColumn() {
    	return null
    }

    static get deleteTimestamp() {
        return null
    }

	client() {
		return this.belongsTo('App/Model/Client', 'id', 'client_id')
	}

	role() {
		return this.belongsTo('App/Model/Role', 'id', 'role_id')
	}
}

module.exports = User
