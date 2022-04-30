<template>
  <img
    alt="OMalo logo"
    src="~assets/logo_465x320.png"
    style="height: 100px"
    class="q-mx-auto block q-my-md"
  >
  <VCarousel />
  <q-page class="flex flex-center">
    <h2 class="text-h2">Catégories</h2>
    <div class="q-pa-md">
      <div class="row">
        <q-card class="col-6 q-pr-sm q-mt-lg" v-for="({ id, name, image }, index) in menuStore.menu" :key="index">
          <router-link :to="{ name: 'items', params: { categoryId: id } }">
          <div style="height: 100px" class="overflow-hidden row content-center">
            <img :src="image" style="width: 100%;">
          </div>
          <q-card-section>
            <div class="text-h6">{{ name }}</div>
          </q-card-section>
          </router-link>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useMenuStore } from 'stores/menu-store'
import VCarousel from '../components/VCarousel.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    VCarousel
  },
  setup () {
    const lorem = 'lorem ipsum'
    const menuStore = useMenuStore()
    return {
      lorem,
      menuStore
    }
  }
})
</script>
