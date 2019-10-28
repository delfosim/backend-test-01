'use strict'

const Lucid = use('Lucid')

class Group extends Lucid {

	static get table() {
        return 'group'
    }

    static get incrementing() {
    	return false
    }

    static get primaryKey() {
    	return 'id'
    }

    static get createdAtColumn {
    	return null
    }

    static get updatedAtColumn {
    	return null
    }
}

module.exports = Group
