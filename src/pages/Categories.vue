<template>
  <VCarousel :image="restaurantStore.restaurant.image" v-if="restaurantStore.restaurant"/>
  <q-page class="flex flex-center column q-mb-xl">
    <h2 class="text-title text-bold q-my-none">Menu</h2>
    <div class="q-px-md q-pt-none">
      <div class="row">
        <div v-for="({uuid, name, image}, index) in restaurantStore.menu" :key="index" class="col-6 q-pr-sm q-mt-lg flex column">
          <div class="text-subtitle text-bold">Nos {{ name.toLowerCase() }}</div>
          <q-card class="card-border-radius shadow-custom-1 flex column" style="flex-grow: 1; justify-content: center;">
            <router-link :to="{ name: 'items', params: { categoryId: uuid } }">
              <div class="categories__items overflow-hidden row content-center q-ma-none card-border-radius" :style="`background: url('${ image }');background-size: cover;background-position: center;`">
                <IconCardRight class="absolute" style="right: 0; bottom: 0"/>
              </div>
            </router-link>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useRestaurantStore } from 'stores/restaurant-store'
import VCarousel from '../components/VCarousel.vue'
import IconCardRight from 'components/IconCardRight.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    VCarousel,
    IconCardRight
  },
  setup () {
    const restaurantStore = useRestaurantStore()
    return {
      restaurantStore
    }
  }
})
</script>

<style scoped lang="scss">
.categories__items {
  height: 157px;
}
@media screen and (min-width: 1024px) {
  .categories__items {
    height: 300px;
  }
  .q-carousel {
    display: none;
  }
}
</style>
