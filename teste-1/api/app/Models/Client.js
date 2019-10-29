'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {

	static get table() {
        return 'client'
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

    modules() {
        return this.hasMany('App/Models/ModuleClient', 'client_id', 'client_id')
    }
}

module.exports = Client
