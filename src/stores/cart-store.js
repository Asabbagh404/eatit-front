import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    temporaryMenuCart: []
  }),
  getters: {
    totalCart () {
      return (this.cart.reduce((tot, curr) => {
        return tot + (curr.priceTaxed * (curr.quantity || 1))
      }, 0)).toFixed(2)
    },
    elementTotalPrice () {
      return (element) => {
        return (element.priceTaxed + this.totalExtraPrice(element)) * (element.quantity || 1)
      }
    },
    totalExtraPrice () {
      return (element) => {
        if (!element.extras) return 0
        return element.extras.reduce((tot, c) => {
          if (!c.value) return tot
          return tot + c.priceTaxed
        }, 0)
      }
    },
    totalItemsCart () {
      return this.cart.reduce((tot, curr) => {
        return tot + (curr.quantity || 1)
      }, 0)
    }
  },
  actions: {
    addToCart (element) {
      const index = this.cart.reduce((tot, el, index) => {
        if (JSON.stringify(el) === JSON.stringify(element)) {
          return index
        }
        return tot
      }, -1)
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
