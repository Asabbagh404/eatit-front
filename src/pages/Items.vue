<template>
  <q-page class="flex column items-center q-mt-xl">
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
    <h2 class="text-title text-bold q-my-none flex items-center items-category-name">{{ currentCategoriesName }}</h2>
    <div class="q-pt-none q-px-md">
      <div class="row">
        <component
          v-for="(element, index) in currentCategoriesElements"
          :key="index"
          :is="isSettingable(element) ? 'router-link' : 'span'"
          :to="{ name: 'singleItem', params: { categoryId: currentCategorie.id, itemId: element.id } }"
          class="col-12 col-md-6 col-lg-4 q-pr-sm q-mt-lg"
        >
          <q-card
            @click="addToCart(element.id)"
            class="bg-grey-2 row card-border-radius"
            style="height: 160px"
          >
            <div style="height: 100%;width: 35%;border-radius: 12px 0 0 12px;" :style="`background: url('${ element.image }');background-size: cover;background-position: center;`" class="overflow-hidden row content-center float-left">
              <q-icon name="info" class="absolute text-white text-h5" color="dark" style="left: 10px; top: 5px; border-radius: 100%" @click.stop="showDetailModal(element)"></q-icon>
            </div>
            <div style="width: 65%">
              <q-card-section class="relative-position full-height">
                <div class="text-h6 text-bold">{{ element.name }}</div>
                <div class="text-caption text-dark">{{ element.description }}</div>
                <div class="row justify-between content-center items-end absolute" style="padding: 0 5px 0 5px;width: 100%;bottom: 0;left: 6px;">
                  <span class="text-h4 text-bold q-mt-md">{{ splitDecimal(element.price)[0] }}.<span class="text-h6 text-bold">{{ splitDecimal(element.price)[1] }}€</span> </span>
                  <VArrowForward />
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
import VArrowForward from '../components/VArrowForward.vue'

export default defineComponent({
  name: 'VItems',
  components: {
    VArrowForward
  },
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
    function splitDecimal (price) {
      return price.toFixed(2).split('.')
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
      showDescriptionModal,
      splitDecimal
    }
  }
})
</script>

<style scoped lang="scss">
.items-category-name:after {
  content: '';
  max-width: 200px;
  min-width: 200px;
  display: block;
  height: 1px;
  background: #d8d8e8;
  float: right;
  margin-left: 20px;
  margin-bottom: 10px;
}
</style>
