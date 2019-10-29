'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Analisy extends Model {

	static get table() {
        return 'analisy'
    }

    static get incrementing() {
    	return false
    }

    static get primaryKey() {
    	return 'client_id'
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
}

module.exports = Analisy
