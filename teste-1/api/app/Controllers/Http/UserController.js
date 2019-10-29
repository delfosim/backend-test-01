'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
const Logger = use('Logger')

class UserController {

  static get inject() {
    return [
      'App/Models/User'
    ]
  }

  constructor(User) {
    this.User = User
  }

  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try {
        var users = await this.User.all()

        var result = []
        for (let x in users.rows) {
            var user = users.rows[x]
            
            var client = await user.client().fetch()
            var modulesClient = await client.modules().fetch()
            var modules = []

            for (let y in modulesClient.rows) {
                var moduleClient = await modulesClient.rows[y].module().select('id', 'name').fetch()
                
                modules.push({
                    id: moduleClient.id,
                    description: moduleClient.name
                })
            }

            result.push({
                name: user.user_name,
                role: await user.role().select('role_name').fetch(),
                modules: modules
            })
        }

        

        response.json({
            result
        })
    } catch(e) {
        Logger.error('Erro ao realizar a requisição: ' + request.url() + ' Motivo: ' + e.message)
        response.status(500).json(e.message)
    }
  }

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
