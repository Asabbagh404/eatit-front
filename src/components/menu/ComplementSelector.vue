<template>
  <template v-for="(complement, index) of itemCopy.complements" :key="index">
    <p class="q-mt-lg q-mb-none text-bold text-subtitle">{{ complement.name }}</p>
    <p class="text-caption text-grey-8"><template v-if="+complement.maximumn !== +complement.complementLines.length">Max: {{ complement.maximumn }}</template><template v-if="complement.minimum !== 0">| Min: {{ complement.minimum }}</template></p>
    <div v-for="(complementLine, ci) of complement.complementLines"
         :key="ci">
      <q-checkbox
        :label="complementLine.name + (complementLine.priceTaxed !== 0 ? ' ' + complementLine.priceTaxed + '€' : '')"
        v-model="itemCopy.complements[index].complementLines[ci].isChecked"
        @click="updateErrors(complement)"
        class="q-py-md"
        style="border-bottom: solid 1px gray"
        checked-icon="radio_button_checked"
        unchecked-icon="radio_button_unchecked"
      >
      </q-checkbox>
    </div>
    <div class="text-red">{{ errorsMessage(complement) }}</div>
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
  methods: {
    forceUpdate () {
      this.$forceUpdate()
    }
  },
  emits: ['update:modelValue', 'update:errors'],
  computed: {
    itemCopy () {
      return this.modelValue
    }
  },
  setup (props, { emit }) {
    const errorsMap = {
      isAbove: (complement) => {
        return `Vous avez selectionné plus de ${complement.maximumn} elements`
      }
    }
    function errorsMessage (complement) {
      if (Object.keys(props.errors).length === 0) return
      return errorsMap[props.errors[complement.uuid].error](complement)
    }
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
    function updateErrors (complement) {
      checkErrors(complement)
    }
    return {
      checkErrors,
      updateErrors,
      errorsMessage
    }
  }
})
</script>

<style scoped>
/deep/ .q-checkbox {
  display: flex;
  justify-content: space-between;
}

/deep/ .q-checkbox__inner {
  order: 2
}

/deep/ .q-checkbox__label {
  text-transform: capitalize;
}

/deep/ .q-checkbox__bg {
  border-radius: 100%;
}

/deep/ .q-checkbox {
  font-weight: bold;
  color: #616161 ;
}
</style>
