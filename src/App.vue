<template>
  <transition
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    appear
    :duration="300"
  >
    <router-view />
  </transition>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useEnvStore } from 'stores/env-store'
import { useRestaurantStore } from 'stores/restaurant-store'
export default defineComponent({
  name: 'App',
  setup () {
    const restaurantStore = useRestaurantStore()
    const envStore = useEnvStore()

    onMounted(() => {
      envStore.setEnv()
      restaurantStore.getRestaurant()
    })
    return {
      restaurantStore
    }
  }
})
</script>
