
let mockRestaurant = [
  {
    id: "1",
    title: "A Restaurant",
    description: "A Restaurant",
    image: 'https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg',
    slot: [
      { slotId: '1', customerName: 'PArithat', dateTime: '2021-11-26 12:30' },
      { slotId: '2', customerName: 'Alex', dateTime: '2021-11-26 13:30' }
    ]
  },
  {
    id: "2",
    title: "B Restaurant",
    description: "B Restaurant",
    image: 'https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg',
    slot: [
      { slotId: '1', customerName: 'PArithat', dateTime: '2021-11-26 12:30' },
      { slotId: '2', customerName: 'Alex', dateTime: '2021-11-26 13:30' }
    ]
  }
]

let userSystem = [
  {
    "username": "parithat",
    "password": "123456"
  }
]

module.exports = { mockRestaurant, userSystem }
