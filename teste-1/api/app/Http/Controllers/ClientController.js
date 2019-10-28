'use strict'

class ClientController {

  static get inject() {
    return [
      'App/Model/Client'
    ]
  }

  constructor(Client) {
    this.Client = Client
  }

  * index(request, response) {
    const client = yield this.Client.all()

    response.json({
      client
    })
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = ClientController
