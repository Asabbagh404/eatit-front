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
        <p class="q-mt-lg q-mb-none text-bold text-subtitle">Ingredients</p>
        <div>
          <q-checkbox
            v-for="(ing, i) in itemCopy.ingredients"
            :key="i"
            :label="i"
            v-model="itemCopy.ingredients[i]"
            class="q-py-md"
            style="border-bottom: solid 1px gray"
            checked-icon="radio_button_checked"
            unchecked-icon="radio_button_unchecked"
          >
          </q-checkbox>
        </div>

      </div>
      <div>
        <p class="q-mt-lg q-mb-none text-bold text-subtitle" style="font-size: 20px">Extras</p>
        <q-checkbox
          v-for="(el, index) of itemCopy.extras" :label="el.name" v-model="el.value" :key="index"
          class="q-py-md"
          style="border-bottom: solid 1px gray"
          checked-icon="radio_button_checked"
          unchecked-icon="radio_button_unchecked"
        >
        </q-checkbox>
      </div>
      <div style="height: 150px"></div>
      <div class="bg-dark fixed-bottom" style="bottom: 0; left: 0;border-radius: 20px 20px 0 0">
        <div class="text-h5 text-white q-py-sm q-mx-md text-bold" style="border-bottom: solid white 0.5px;">Total <span class="float-right">{{ sumTotal }} €</span></div>
        <q-btn class="text-body1 text-black bg-primary q-py-md q-mx-auto q-mt-md row q-my-sm" style="width: 300px; text-transform: none; border-radius: 30px" @click="addToCart">Ajouter à la commande</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMenuStore } from 'stores/menu-store'
import { useCartStore } from 'stores/cart-store'

export default defineComponent({
  setup () {
    const
      cartStore = useCartStore(),
      menuStore = useMenuStore(),
      route = useRoute(),
      router = useRouter(),
      itemId = route.params.itemId,
      categoryId = route.params.categoryId,
      category = ref(menuStore.menu.find(el => +el.id === +categoryId)),
      item = ref(category.value.elements.find((el) => {
        return +el.id === +itemId
      })),
      itemCopy = ref(JSON.parse(JSON.stringify(item.value))),
      sumTotal = computed(() => {
        const totalExtra = itemCopy.value.extras.reduce((tot, curr) => {
          if (!curr.value) return tot
          return tot + curr.price
        }, 0)
        return item.value.price + totalExtra
      })
    function addToCart () {
      cartStore.addToCart(itemCopy.value)
      router.push('/')
    }
    return {
      cartStore,
      item,
      sumTotal,
      addToCart,
      itemCopy
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
