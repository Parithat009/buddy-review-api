const { v4: uuidv4 } = require('uuid')
let { mockRestaurant } = require('../../mockData')

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
  },

  reserveService(id, body) {
    try {
      let element = {}
      const isRestauraunt = mockRestaurant.map(item => {
        if (item.id !== id) return item
        else {
          return element = {
            ...item,
            slot: [
              ...item.slot,
              {
                slotId: uuidv4(),
                customerName: body.customerName,
                date: body.date,
                time: body.time
              }
            ]
          }
        }
      })

      mockRestaurant = isRestauraunt
      return element
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = { ...methods }