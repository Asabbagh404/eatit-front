<template>
  <span><q-icon :name="icon" class="text-h6 text-bold bg-primary q-px-lg q-py-sm" style="border-radius: 20px 0 12px 0"></q-icon></span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconCardRight',
  props: {
    icon: {
      type: String,
      default: 'chevron_right'
    }
  }
})
</script>
