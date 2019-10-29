'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ModuleClient extends Model {

	static get table() {
        return 'module_client'
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

    module() {
        return this.belongsTo('App/Models/Module', 'module_id', 'id')
    }

}

module.exports = ModuleClient
