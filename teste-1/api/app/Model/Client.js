'use strict'

const Lucid = use('Lucid')

class Client extends Lucid {

	static get table() {
        return 'client'
    }

    static get incrementing() {
    	return false
    }

    static get primaryKey() {
    	return 'client_id'
    }

    static get createdAtColumn {
    	return null
    }

    static get updatedAtColumn {
    	return null
    }
}

module.exports = Client
