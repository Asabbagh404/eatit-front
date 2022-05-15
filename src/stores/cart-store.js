import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    temporaryMenuCart: []
  }),
  getters: {
    totalCart () {
      return (this.cart.reduce((tot, curr) => {
        return tot + this.elementTotalPrice(curr)
      }, 0)).toFixed(2)
    },
    elementTotalPrice () {
      return (element) => {
        return (element.priceTaxed + this.totalComplementPrice(element)) * (element.quantity || 1)
      }
    },
    totalComplementPrice () {
      return (element) => {
        if (!element || element.length === 0) return 0
        return element.complements.reduce((tot, complement) => {
          return tot + (complement.complementLines.reduce((tot, line) => {
            if (line.isChecked) return tot + line.priceTaxed
            return tot
          }, 0))
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
