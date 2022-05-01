<template>
  <div class="relative-position">
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      control-color="white"
      padding
      arrows
      height="300px"
      class="bg-primary text-white rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center" img-src="~assets/slider/1.jpg">
        <div class="absolute-bottom custom-caption q-pl-sm q-mb-xl" style="background: #7d7d7d4a;">
          <div class="text-h4">20% sur les glaces</div>
          <div class="text-subtitle1">Du 22 au 26 avril</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center" img-src="~assets/slider/2.jpg">
        <div class="absolute-bottom custom-caption q-pl-sm q-mb-xl" style="background: #7d7d7d4a;">
          <div class="text-h4">20% sur les glaces</div>
          <div class="text-subtitle1">Du 22 au 26 avril</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center" img-src="~assets/slider/3.jpg">
        <div class="absolute-bottom custom-caption q-pl-sm q-mb-xl" style="background: #7d7d7d4a;">
          <div class="text-h4">20% sur les glaces</div>
          <div class="text-subtitle1">Du 22 au 26 avril</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center" img-src="~assets/slider/4.jpg">
        <div class="absolute-bottom custom-caption q-pl-sm q-mb-xl" style="background: #7d7d7d4a;">
          <div class="text-h4">20% sur les glaces</div>
          <div class="text-subtitle1">Du 22 au 26 avril</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         style="position: absolute;bottom: -1px;width: 100vw" viewBox="0 0 375 68">
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectangle_284" data-name="Rectangle 284" width="375" height="68" transform="translate(3943 1930)"
                fill="#fff" stroke="#707070" stroke-width="1"/>
        </clipPath>
      </defs>
      <g id="Groupe_de_masques_1" data-name="Groupe de masques 1" transform="translate(-3943 -1930)"
         clip-path="url(#clip-path)">
        <path id="Union_2" data-name="Union 2"
              d="M-5280-3087.262a38,38,0,0,1-38-38,38.015,38.015,0,0,1,26.985-36.379V-3202s5.586,34.792,35.317,38.738H-4954a38.017,38.017,0,0,1,35.982,25.75,31.157,31.157,0,0,1,1.261,4.666,38.192,38.192,0,0,1,.757,7.584q0,1.525-.118,3.021c.257,24.392-.051,19.283-.051,19.283h-7.062a37.949,37.949,0,0,1-30.768,15.7Z"
              transform="translate(9234.016 5131.631)" fill="#ffffff"/>
      </g>
    </svg>
  </div>
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
