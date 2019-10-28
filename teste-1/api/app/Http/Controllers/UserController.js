'use strict'

class UserController {

  static get inject() {
    return [
      'App/Model/User'
    ]
  }

  constructor(User) {
    this.User = User
  }

  * index(request, response) {
    const user = yield this.User.all()

    response.json({
      user
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

module.exports = UserController
