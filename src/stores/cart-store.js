import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    temporaryMenuCart: []
  }),
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
      if (!this.cart[index].quantity) this.cart[index].quantity = 1
      this.cart[index].quantity = this.cart[index].quantity + inc
    },
    deleteElement (index) {
      this.cart.splice(index, 1).filter(el => el)
    }
  }
})
