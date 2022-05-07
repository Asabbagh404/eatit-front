<template>
  <div style="height: 150px"></div>
  <div class="bg-dark fixed-bottom" style="bottom: 0; left: 0;border-radius: 20px 20px 0 0">
    <div class="text-h5 text-white q-py-sm q-mx-md text-bold" style="border-bottom: solid white 0.5px;">Total <span class="float-right">{{ total }} €</span></div>
    <ButtonLong color="primary" @click="$emit('btnClick')" :disable="disable"><slot></slot></ButtonLong>
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
      type: Number,
      required: true
    },
    disable: {
      type: Boolean,
      default: false
    }
  }
})
</script>
