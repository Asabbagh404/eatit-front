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

export default defineComponent({
  name: 'App',
  setup () {
    const envStore = useEnvStore()
    onMounted(() => {
      envStore.setEnv()
    })
  }
})
</script>
