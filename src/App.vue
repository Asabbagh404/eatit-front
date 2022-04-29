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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
