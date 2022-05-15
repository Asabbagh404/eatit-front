<template>
  <div>
    <div  class="relative-position" :style="`background-image: url(${ itemCopy.image })`" style="height: 300px;background-size: cover;background-position: center;">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute;bottom: -1px;width: 100vw" viewBox="0 0 375 68">
        <defs>
          <clipPath id="clip-path">
            <rect id="Rectangle_284" data-name="Rectangle 284" width="375" height="68" transform="translate(3943 1930)" fill="#fff" stroke="#707070" stroke-width="1"/>
          </clipPath>
        </defs>
        <g id="Groupe_de_masques_1" data-name="Groupe de masques 1" transform="translate(-3943 -1930)" clip-path="url(#clip-path)">
          <path id="Union_2" data-name="Union 2" d="M-5280-3087.262a38,38,0,0,1-38-38,38.015,38.015,0,0,1,26.985-36.379V-3202s5.586,34.792,35.317,38.738H-4954a38.017,38.017,0,0,1,35.982,25.75,31.157,31.157,0,0,1,1.261,4.666,38.192,38.192,0,0,1,.757,7.584q0,1.525-.118,3.021c.257,24.392-.051,19.283-.051,19.283h-7.062a37.949,37.949,0,0,1-30.768,15.7Z" transform="translate(9234.016 5131.631)" fill="#ffffff"/>
        </g>
      </svg>
    </div>
    <div class="bg-white q-px-md">
      <h5 class="q-my-none text-bold text-title">{{ itemCopy.name }}</h5>
      <p class="q-mt-md text-caption text-grey-8">{{ itemCopy.description }}</p>
      <div style="border-top: solid 1px grey">
        <template v-for="(complement, index) of itemCopy.complements" :key="index">
          <ComplementSelector v-model="itemCopy.complements[index]" v-model:errors="errors[complement.uuid]"></ComplementSelector>
        </template>
      </div>
      <BottomTotal @btnClick="addToCart" :total="sumTotal" :disable="!noErrors">Ajouter à la commande</BottomTotal>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRestaurantStore } from 'stores/restaurant-store'
import { useCartStore } from 'stores/cart-store'
import BottomTotal from 'components/menu/BottomTotal.vue'
import ComplementSelector from 'components/menu/ComplementSelector.vue'

export default defineComponent({
  components: {
    BottomTotal,
    ComplementSelector
  },
  setup () {
    const
      cartStore = useCartStore(),
      restaurantStore = useRestaurantStore(),
      route = useRoute(),
      router = useRouter(),
      itemId = route.params.itemId,
      categoryId = route.params.categoryId,
      item = computed(() => {
        if (!restaurantStore.menu) return []
        const category = restaurantStore.menu.find((el) => {
          return el.uuid === categoryId
        })
        return category.items.find((item) => item.uuid === itemId)
      }),
      itemCopy = computed(() => {
        if (item.value.length === 0) return []
        const copy = JSON.parse(JSON.stringify(item.value))
        copy.complements.forEach(complement => {
          complement.complementLines.forEach((line) => {
            line.isChecked = !!(line.isChecked)
          })
        })
        return copy
      }),
      sumTotal = computed(() => {
        if (itemCopy.value.length === 0) return 0
        const totalExtra = itemCopy.value.complements.reduce((tot, curr) => {
          if (!curr.value) return tot
          return tot + (curr.complementLines.reduce((clTot, clCurr) => {
            if (!clCurr) return clTot
            return clTot + clCurr.priceTaxed
          }))
        }, 0)
        return itemCopy.value.priceTaxed + totalExtra
      }),
      errors = ref({}),
      noErrors = computed(() => {
        return Object.values(errors.value).filter(el => el.uuid).length === 0
      })
    function checkErrors (complement) {
      return [checkMax(complement)].join('\n')
    }
    function checkMax (complement) {
      const isBelow = complement.complementLines.length > complement.complementLines.filter((line) => line.isChecked).length
      if (!isBelow) {
        errors[complement.uuid] = { name: complement.name, error: 'isAbove' }
      } else {
        delete errors[complement.uuid]
      }
      return isBelow ? '' : `Vous ne pouvez pas choisir plus de ${complement.maximumn} elements`
    }
    function addToCart () {
      cartStore.addToCart(itemCopy.value)
      router.push('/')
    }
    return {
      cartStore,
      item,
      sumTotal,
      addToCart,
      itemCopy,
      restaurantStore,
      checkErrors,
      errors,
      noErrors
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
