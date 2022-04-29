<template>
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
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const lorem = 'lorem ipsum'
    const slide = ref('style')
    return {
      lorem,
      slide
    }
  }
})
</script>
