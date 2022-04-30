<template>
  <q-page class="flex flex-center column">
    <q-dialog
      v-model="showDescriptionModal"
      stack-buttons
      prevent-close
      @cancel="showDescriptionModal = false"
    >
      <q-card class="q-pb-md" style="width: 300px">
        <q-card-section class="bg-primary text-white q-px-xl">
          <div class="text-h6"> {{ modalContent.name }}</div>
        </q-card-section>
        <p class="q-mx-lg q-my-md">
          {{ modalContent.description }}
        </p>
        <p class="q-mx-lg q-my-md">
          <q-chip v-for="(ing, i) of modalContent.ingredients" :key="i" label="i"></q-chip>
        </p>
      </q-card>
    </q-dialog>
    <h2 class="text-h2 q-my-none">{{ currentCategoriesName }}</h2>
    <div class="q-pa-md">
      <div class="row">
        <component
          v-for="(element, index) in currentCategoriesElements"
          :key="index"
          :is="isSettingable(element) ? 'router-link' : 'span'"
          :to="{ name: 'singleItem', params: { categoryId: currentCategorie.id, itemId: element.id } }"
          class="col-12 q-pr-sm q-mt-lg"
        >
          <q-card
            @click="addToCart(element.id)"
            class="bg-grey-2 row"
            style="height: 160px"
          >
            <div style="height: 100%;width: 35%;" :style="`background: url('${ element.image }');background-size: cover;background-position: center;`" class="overflow-hidden row content-center float-left">
              <q-icon name="info" class="absolute text-white text-h5" color="dark" style="left: 10px; top: 5px; border-radius: 100%" @click.stop="showDetailModal(element)"></q-icon>
            </div>
            <div style="width: 65%">
              <q-card-section class="relative-position full-height">
                <div class="text-h6 text-bold">{{ element.name }}</div>
                <div class="text-caption text-dark">{{ element.description }}</div>
                <div class="row justify-between content-center items-end absolute" style="padding: 0 5px 0 5px;width: calc(100% - 10px);bottom: 0;">
                  <span class="text-h5 text-bold q-mt-md">{{ element.price.toFixed(2) }} €</span>
                  <span><q-icon name="arrow_forward" class="text-h6 text-bold bg-primary q-px-lg q-py-sm" style="border-radius: 20px 0 0 0"></q-icon></span>
                </div>
              </q-card-section>
            </div>
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
    const slide = ref('style')
    const menuStore = useMenuStore()
    const cartStore = useCartStore()
    const route = useRoute()
    const modalContent = ref(false)
    const showDescriptionModal = ref(false)
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
    function showDetailModal (element) {
      showDescriptionModal.value = true
      modalContent.value = element
    }

    return {
      slide,
      currentCategorie,
      currentCategoriesName,
      currentCategoriesElements,
      addToCart,
      cartStore,
      isSettingable,
      showDetailModal,
      modalContent,
      showDescriptionModal
    }
  }
})
</script>
