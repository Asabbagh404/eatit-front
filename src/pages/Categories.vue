<template>
  <img
    alt="Quasar logo"
    src="~assets/logo_465x320.png"
    style="height: 100px"
    class="q-mx-auto block q-my-md"
  >
  <q-carousel
    v-model="slide"
    transition-prev="jump-right"
    transition-next="jump-left"
    swipeable
    animated
    control-color="white"
    padding
    arrows
    height="200px"
    class="bg-primary text-white shadow-1 rounded-borders"
  >
    <q-carousel-slide name="style" class="column no-wrap flex-center" img-src="~assets/slider/1.jpg">
      <div class="absolute-bottom custom-caption q-pl-sm" style="background: #7d7d7d4a;">
        <div class="text-h4">20% sur les glaces</div>
        <div class="text-subtitle1">Du 22 au 26 avril</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="tv" class="column no-wrap flex-center" img-src="~assets/slider/2.jpg">
      <div class="absolute-bottom custom-caption q-pl-sm" style="background: #7d7d7d4a;">
        <div class="text-h4">20% sur les glaces</div>
        <div class="text-subtitle1">Du 22 au 26 avril</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="layers" class="column no-wrap flex-center" img-src="~assets/slider/3.jpg">
      <div class="absolute-bottom custom-caption q-pl-sm" style="background: #7d7d7d4a;">
        <div class="text-h4">20% sur les glaces</div>
        <div class="text-subtitle1">Du 22 au 26 avril</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="map" class="column no-wrap flex-center" img-src="~assets/slider/4.jpg">
      <div class="absolute-bottom custom-caption q-pl-sm" style="background: #7d7d7d4a;">
        <div class="text-h4">20% sur les glaces</div>
        <div class="text-subtitle1">Du 22 au 26 avril</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
  <q-page class="flex flex-center">
    <h2 class="text-h2">Catégories</h2>
    <div class="q-pa-md">
      <div class="row">
        <q-card class="col-6 q-pr-sm q-mt-lg" v-for="({ id, name, image }, index) in categories" :key="index">
          <router-link :to="{ path: '/categories/' + id }">
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
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const lorem = 'lorem ipsum'
    const slide = ref('style')
    const categories = [
      {
        id: 1,
        name: 'Burgers',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80'
      },
      {
        id: 2,
        name: 'Kebab',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80'
      },
      {
        id: 3,
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      },
      {
        id: 4,
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      },
      {
        id: 5,
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      },
      {
        id: 6,
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      },
      {
        id: 7,
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      }
    ]
    return {
      lorem,
      slide,
      categories
    }
  }
})
</script>
