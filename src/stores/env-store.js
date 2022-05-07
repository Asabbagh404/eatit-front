import { defineStore } from 'pinia'

export const useEnvStore = defineStore('env', {
  state: () => ({
    isTablet: true,
    isConnected: false,
    uuid: false,
    isAdmin: false
  }),
  actions: {
    setIsTablet () {
      this.isTablet = !!localStorage.isTablet
    },
    setConnection () {
      this.isConnected = true
    },
    setEnv () {
      this.setIsTablet()
      this.setConnection()
    }
  }
})
