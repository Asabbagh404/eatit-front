<template>
    <p class="q-mt-lg q-mb-none text-bold text-subtitle">{{ complementCopy.name }}</p>
    <p class="text-caption text-grey-8">
      {{ minMaxMessage }}
    </p>
    <div v-for="(complementLine, ci) of complementCopy.complementLines"
         :key="ci">
      <q-checkbox
        :label="complementLine.name + (complementLine.priceTaxed !== 0 ? ' ' + complementLine.priceTaxed + '€' : '')"
        v-model="complementCopy.complementLines[ci].isChecked"
        @click="updateErrors(complementLine)"
        class="q-py-md"
        style="border-bottom: solid 1px gray"
        checked-icon="radio_button_checked"
        unchecked-icon="radio_button_unchecked"
      >
      </q-checkbox>
    </div>
    <div class="text-red">{{ errorsMessage }}</div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    errors: {
      required: true
    }
  },
  methods: {
    forceUpdate () {
      this.$forceUpdate()
    }
  },
  emits: ['update:modelValue', 'update:errors'],
  setup (props, { emit }) {
    const complementCopy = computed(() => {
      return props.modelValue
    })
    const isRadio = computed(() => {
      return +complementCopy.value.maximumn === 1 && +complementCopy.value.minimum === 1
    })
    const minMaxMessage = computed(() => {
      if (isRadio.value) return 'Obligatoire *'
      const noMinOrMax = (limit) => complementCopy[limit] === 0
      const maxContent = noMinOrMax('maxiumn') ? '' : `Max: ${complementCopy.value.maximumn}`
      const minContent = noMinOrMax('minimum') ? '' : `Min: ${complementCopy.value.minimum}`
      return `${maxContent} ${minContent.length > 0 && maxContent.length > 0 ? '|' : ''}  ${minContent}`
    })
    const errorsMap = {
      isAbove: `Vous avez selectionné plus de ${complementCopy.value.maximumn} elements`,
      isBelow: `Vous avez selectionné moins de ${complementCopy.value.minimum} elements`
    }
    const errorsMessage = computed(() => {
      if (!props.errors) return ''
      return Object.values(props.errors).reduce((el, tot) => {
        if (!errorsMap[el.error]) return tot
        return tot + ('\n' + el.content)
      }, '')
    })
    function checkErrors () {
      return checkMaxAndMin()
    }
    function checkMaxAndMin () {
      const isBelow = complementCopy.value.maximumn >= complementCopy.value.complementLines.filter((line) => line.isChecked).length
      const isAbove = complementCopy.value.minimum <= complementCopy.value.complementLines.filter((line) => line.isChecked).length
      if (!isBelow || !isAbove) {
        const typeError = !isBelow ? 'isAbove' : 'isBelow'
        return { uuid: complementCopy.value.uuid, name: complementCopy.value.name, error: typeError, content: errorsMap[typeError] }
      } else {
        return {}
      }
    }
    function updateErrors (complementLine) {
      if (isRadio.value) {
        complementCopy.value.complementLines.forEach((el) => {
          if (el.uuid === complementLine.uuid) return
          el.isChecked = false
        })
      }
      const copyErrors = checkErrors()
      emit('update:errors', copyErrors)
    }
    return {
      checkErrors,
      updateErrors,
      errorsMessage,
      complementCopy,
      minMaxMessage
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
