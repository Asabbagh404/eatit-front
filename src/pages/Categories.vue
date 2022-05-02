<template>
  <VCarousel />
  <q-page class="flex flex-center">
    <h2 class="text-title text-bold q-my-none">Menu</h2>
    <div class="q-px-md q-pt-none">
      <div class="row">
        <div v-for="({ id, name, image }, index) in menuStore.menu" :key="index" class="col-6 q-pr-sm q-mt-lg">
          <div class="text-subtitle text-bold">Nos {{ name.toLowerCase() }}</div>
          <q-card class="card-border-radius shadow-custom-1">
            <router-link :to="{ name: 'items', params: { categoryId: id } }">
              <div style="height: 157px;" class="overflow-hidden row content-center q-ma-none card-border-radius" :style="`background: url('${ image }');background-size: cover;background-position: center;`">
                <VArrowForward class="absolute" style="right: 0; bottom: 0"/>
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
import { useMenuStore } from 'stores/menu-store'
import VCarousel from '../components/VCarousel.vue'
import VArrowForward from '../components/VArrowForward.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    VCarousel,
    VArrowForward
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
