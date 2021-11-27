
let mockRestaurant = [
  {
    id: "1",
    title: "A Restaurant",
    description: "A Restaurant",
    image: 'https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg',
    slot: [
      { slotId: '1', customerName: 'PArithat', date: '2021-11-26', time: '11:00' },
      { slotId: '2', customerName: 'Alex', date: '2021-11-26', time: '09:30' }
    ]
  },
  {
    id: "2",
    title: "B Restaurant",
    description: "B Restaurant",
    image: 'https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg',
    slot: [
      { slotId: '1', customerName: 'PArithat', date: '2021-11-26', time: '10:00' },
      { slotId: '2', customerName: 'Alex', date: '2021-11-26', time: '09:00' }
    ]
  },
  {
    id: "3",
    title: "C Restaurant",
    description: "B Restaurant",
    image: 'https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg',
    slot: [
      { slotId: '1', customerName: 'PArithat', date: '2021-11-26', time: '10:00' },
      { slotId: '2', customerName: 'Alex', date: '2021-11-26', time: '09:00' }
    ]
  },
  {
    id: "4",
    title: "D Restaurant",
    description: "B Restaurant",
    image: 'https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg',
    slot: [
      { slotId: '1', customerName: 'PArithat', date: '2021-11-26', time: '10:00' },
      { slotId: '2', customerName: 'Alex', date: '2021-11-26', time: '09:00' }
    ]
  }
]

let userSystem = [
  {
    "username": "admin",
    "password": "123456"
  }
]

module.exports = { mockRestaurant, userSystem }
