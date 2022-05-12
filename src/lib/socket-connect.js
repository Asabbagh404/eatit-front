import { io } from 'socket.io-client'
const RESTAURANT_ID = 'heaven-food'
const URL_HOST = window.location.host
const CURRENTSUBDOMAIN = URL_HOST.split('.')[0]

function Socket (wss) {
  const url = import.meta.env.PROD ? CURRENTSUBDOMAIN : RESTAURANT_ID

  const socket = io(wss, { autoConnect: false })
  socket.onAny((event, ...args) => {
    console.log(event, args)
  }) // catch all
  socket.connect()
  this.socket = socket

  this.getRestaurant = (cb) => {
    this.socket.emit('on:restaurant', { url })
    this.socket.on('emit:restaurant', cb)
    return this.socket
  }
  this.getMenu = (cb, uuid) => {
    this.socket.emit('on:menu:actual', { uuid })
    this.socket.on('emit:menu:actual', cb)
    return this.socket
  }
}

const socket = new Socket('https://order-it-server.herokuapp.com')

export { socket }
