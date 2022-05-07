<template>
  <div style="height: 150px"></div>
  <div class="bg-dark fixed-bottom bottom-total" style="bottom: 0; left: 0;border-radius: 20px 20px 0 0">
    <div class="text-h5 text-white q-py-sm q-mx-md text-bold" style="border-bottom: solid white 0.5px;">Total <span class="float-right">{{ total }} €</span></div>
    <div style="transition: all ease .4s" :style="expanded ? 'height: 300px' : 'height: 80px'">
      <ButtonLong color="primary" @click="$emit('btnClick')" :disable="disable"><slot></slot></ButtonLong>
      <transition name="fade">
        <div v-show="expanded">
          <slot name="expanded-content" ></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ButtonLong from 'components/menu/ButtonLong.vue'

export default defineComponent({
  components: {
    ButtonLong
  },
  emits: ['btnClick'],
  props: {
    total: {
      type: [Number, String],
      required: true
    },
    disable: {
      type: Boolean,
      default: false
    },
    expanded: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style scoped lang="scss">
.bottom-total {
  transition: all ease .4s;
}
</style>
