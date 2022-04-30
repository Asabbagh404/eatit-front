<template>
  <q-page class="flex flex-center column">
    <img
      alt="O'Malo"
      src="~assets/logo_465x320.png"
      style="height: 100px"
      class="q-mx-auto block q-my-md"
    >
    <h2 class="text-h2 q-my-none">{{ currentCategoriesName }}</h2>
    <div class="q-pa-md">
      <div class="row">
        <component
          v-for="(element, index) in currentCategoriesElements"
          :key="index"
          :is="isSettingable(element) ? 'router-link' : 'span'"
          :to="{ name: 'singleItem', params: { categoryId: currentCategorie.id, itemId: element.id } }"
          class="col-6 q-pr-sm q-mt-lg"
        >
          <q-card
            @click="addToCart(element.id)"
            class="full-height"
          >
            <div style="height: 100px" class="overflow-hidden row content-center">
              <img :src="element.image" style="width: 100%;">
            </div>
            <q-card-section>
              <div class="text-h6">{{ element.name }}</div>
              <div class="text-caption">{{ element.description }}</div>
              <div class="text-h6 text-right">{{ element.price }} €</div>
            </q-card-section>
          </q-card>
        </component>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useMenuStore } from 'stores/menu-store'
import { useCartStore } from 'stores/cart-store'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'VItems',
  setup () {
    const lorem = 'lorem ipsum'
    const slide = ref('style')
    const menuStore = useMenuStore()
    const cartStore = useCartStore()
    const route = useRoute()
    const currentCategorie = computed(() => {
      return menuStore.menu.find(el => +el.id === +route.params.categoryId)
    })
    const currentCategoriesName = computed(() => {
      return currentCategorie.value.name
    })
    const currentCategoriesElements = computed(() => {
      return currentCategorie.value.elements
    })

    function addToCart (id) {
      const element = getItemById(id)
      if (isSettingable(element)) return
      cartStore.addToCart(currentCategoriesElements.value.find(el => el.id === id))
    }

    function isSettingable (element) {
      return element.options || element.extras || element.ingredients
    }

    function getItemById (id) {
      return currentCategoriesElements.value.find(el => +el.id === +id)
    }

    return {
      lorem,
      slide,
      currentCategorie,
      currentCategoriesName,
      currentCategoriesElements,
      addToCart,
      cartStore,
      isSettingable
    }
  }
})
</script>
