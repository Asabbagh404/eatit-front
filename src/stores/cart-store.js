import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    temporaryMenuCart: []
  }),
  getters: {
    totalCart () {
      return this.cart.reduce((tot, curr) => {
        return tot + (curr.price * (curr.quantity || 1))
      }, 0)
    },
    totalItemsCart () {
      return this.cart.reduce((tot, curr) => {
        return tot + (curr.quantity || 1)
      }, 0)
    }
  },
  actions: {
    addToCart (element) {
      const index = this.cart.findIndex(cartEl => +cartEl.id === +element.id)
      if (index !== -1) {
        if (!this.cart[index].quantity) {
          this.cart[index].quantity = 1
        }
        this.cart[index].quantity++
      } else {
        this.cart.push(element)
      }
    },
    modifyQte (index, dir) {
      const inc = dir ? 1 : -1
      if ((this.cart[index].quantity + inc) === 0) this.deleteElement(index)
      if (!this.cart[index].quantity) this.cart[index].quantity = 1
      this.cart[index].quantity = this.cart[index].quantity + inc
    },
    deleteElement (index) {
      this.cart.splice(index, 1).filter(el => el)
    }
  }
})
