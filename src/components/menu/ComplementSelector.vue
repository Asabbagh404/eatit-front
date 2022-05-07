<template>
  <template v-for="(complement, index) of itemCopy.complements" :key="index">
    <p class="q-mt-lg q-mb-none text-bold text-subtitle">{{ complement.name }}</p>
    <p class="text-caption text-grey-8"><template v-if="+complement.maximumn !== +complement.complementLines.length">Max: {{ complement.maximumn }}</template><template v-if="complement.minimum !== 0">| Min: {{ complement.minimum }}</template></p>
    <div v-for="(complementLine, ci) of complement.complementLines"
         :key="ci">
      <q-checkbox
        :label="complementLine.name + (complementLine.priceTaxed !== 0 ? ' ' + complementLine.priceTaxed + '€' : '')"
        v-model="itemCopy.complements[index].complementLines[ci].isChecked"
        @click="$forceUpdate()"
        class="q-py-md"
        style="border-bottom: solid 1px gray"
        checked-icon="radio_button_checked"
        unchecked-icon="radio_button_unchecked"
      >
      </q-checkbox>
    </div>
    <span  class="text-red">{{ checkErrors(complement) }}</span>
  </template>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue', 'update:errors'],
  computed: {
    itemCopy () {
      return this.modelValue
    }
  },
  setup (props, { emit }) {
    function checkErrors (complement) {
      return [checkMax(complement)].join('\n')
    }
    function checkMax (complement) {
      const copyErrors = { ...props.errors }
      const isBelow = complement.complementLines.length > complement.complementLines.filter((line) => line.isChecked).length
      if (!isBelow) {
        copyErrors[complement.uuid] = { name: complement.name, error: 'isAbove' }
      } else {
        delete copyErrors[complement.uuid]
      }
      emit('update:errors', copyErrors)
      return isBelow ? '' : `Vous ne pouvez pas choisir plus de ${complement.maximumn} elements`
    }
    return {
      checkErrors
    }
  }
})
</script>
