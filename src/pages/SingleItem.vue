<template>
  <div>
    <h2>{{ itemCopy.name }}</h2>
    <div>
      <h4>Ingredients :</h4>
      <q-checkbox
        v-for="(ing, i) in itemCopy.ingredients"
        :key="i"
        :label="i"
        v-model="itemCopy.ingredients[i]"
      >
      </q-checkbox>
    </div>
    <div>
      <h4>Extras :</h4>
      <q-checkbox v-for="(el, index) of itemCopy.extras" :label="el.name" v-model="el.value" :key="index"></q-checkbox>
    </div>
    <div class="text-h4 fixed-bottom text-secondary" style="bottom: 90px; left: 10px">TOTAL: {{ sumTotal }} €</div>
    <q-btn class="text-h5 fixed-bottom text-white bg-primary" style="bottom: 20px; left: 10px; width: 250px" @click="addToCart">Commander</q-btn>
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
