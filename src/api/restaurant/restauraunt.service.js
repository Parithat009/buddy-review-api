const { mockRestaurant } = require('../../mockData')

const methods = {
  findAllService() {
    try {
      return mockRestaurant
    } catch (error) {
      throw new Error(error)
    }
  },

  findOneService(id) {
    try {
      return mockRestaurant.find(item => item.id === id)
    } catch (error) {
      throw new Error(error)
    }

  }

  // signUpService(params) {
  //   userSystem.push(params)
  //   return { message: 'Sign Up Success' }
  // }
}

module.exports = { ...methods }