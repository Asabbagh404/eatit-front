<template>
  <q-btn
    :class="`text-body1 text-black bg-${this.color} q-py-md q-mx-auto q-mt-md row q-my-sm`"
    :style="`width: ${ this.width }; text-transform: none; border-radius: 30px`"
    :disable="disable"
  >
    <slot></slot>
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    width: {
      type: String,
      default: '300px'
    },
    disable: {
      type: Boolean,
      default: false
    }
  }
})
</script>
