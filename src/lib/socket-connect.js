import { io } from 'socket.io-client'
const RESTAURANT_ID = 'rstrnt00-0000-0000-0000-000000000002'
function Socket (url) {
  const socket = io(url, { autoConnect: false })
  socket.onAny((event, ...args) => {
    console.log(event, args)
  }) // catch all
  socket.connect()
  this.socket = socket
  this.getRestaurant = (cb) => {
    this.socket.emit('on:restaurant', { uuid: RESTAURANT_ID })
    this.socket.on('emit:restaurant', cb)
    return this.socket
  }
  this.getMenu = (cb) => {
    this.socket.emit('on:menu:actual', { uuid: RESTAURANT_ID })
    this.socket.on('emit:menu:actual', cb)
    return this.socket
  }
}

const socket = new Socket('https://order-it-server.herokuapp.com')

export { socket }
