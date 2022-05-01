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
      this.isConnected = !!localStorage.isTablet
    },
    setEnv () {
      this.setIsTablet()
      this.setConnection()
    }
  }
})
