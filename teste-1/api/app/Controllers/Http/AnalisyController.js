'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with analisies
 */
class AnalisyController {

  static get inject() {
    return [
      'App/Models/Analisy'
    ]
  }

  constructor(Analisy) {
    this.Analisy = Analisy
  }

  /**
   * Show a list of all analisies.
   * GET analisies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    var analisys = await this.Analisy.all()

    var chart = []
    var table = []
    var result = []
    for (let x in analisys.rows) {
      var analisy = analisys.rows[x]

      chart.push({
        name: "var_" + analisy.id,
        data: [analisy.sample_time, analisy.value]
      })

      table.push({
        var: "var_" + analisy.id,
        sample_time: analisy.sample_time,
        value: analisy.value,
      })
    }

    result.push({
        1: {
          chart
        },
        table
    })

    response.json({
      result
    })
  }

  /**
   * Render a form to be used for creating a new analisy.
   * GET analisies/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new analisy.
   * POST analisies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single analisy.
   * GET analisies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing analisy.
   * GET analisies/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update analisy details.
   * PUT or PATCH analisies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a analisy with id.
   * DELETE analisies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AnalisyController
