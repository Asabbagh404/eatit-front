<template>
  <q-btn
    class="btn-long"
    :class="`text-body1 text-${textColor} bg-${this.color} ${classSize} q-mx-auto q-mt-md row q-my-sm`"
    :style="`width: ${ this.width }; text-transform: none; border-radius: 30px`"
    :disable="disable"
    :icon="icon"
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
    },
    icon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'md'
    },
    textColor: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    classSize () {
      const sizeMapping = {
        md: 'q-py-md',
        lg: 'q-py-lg-2'
      }
      return sizeMapping[this.size]
    }
  }
})
</script>
<style scoped lang="scss">
.q-py-lg-2 {
  padding-top: 36px;
  padding-bottom: 36px;
}
.btn-long::v-deep{
  i {
    position: absolute;
    left: 50px;
  }
}
</style>
