<template>
  <q-page class="flex flex-center">
    <h2 class="text-h2">Panier</h2>
    <div class="q-pa-md">
      <div class="row">
        <q-card
          class="col-12 q-pr-sm q-mt-lg"
          v-for="({ name, image, quantity }, index) in cartStore.cart"
          :key="index"
        >
          <div
            style="height: 100px"
            class="overflow-hidden row content-center"
          >
            <q-icon
              @click="deleteElement"
              name="delete"
              style="top: 5px; left: 5px"
              class="absolute text-red-5 text-h5"
            ></q-icon>
            <q-icon
              @click="deleteElement"
              name="edit"
              style="top: 5px; left: 30px"
              class="absolute text-white text-h5"
            ></q-icon>
            <img :src="image" style="width: 100%;">
          </div>
          <q-card-section>
            <div class="row justify-between">
              <div class="text-h6">{{ name }}</div>
              <div class="text-h6">
                <q-btn @click="modifyQte(index, false)" icon="remove" color="primary" round />
                <span class="q-mx-md">{{ quantity || 1 }}</span>
                <q-btn @click="modifyQte(index, true)" icon="add" color="primary" round /></div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useCartStore } from 'stores/cart-store'

export default defineComponent({
  name: 'VItems',
  setup () {
    const cartStore = useCartStore()
    function modifyQte (index, dir) {
      cartStore.modifyQte(index, dir)
    }
    function deleteElement (index) {
      cartStore.deleteElement(index)
    }
    return {
      cartStore,
      modifyQte,
      deleteElement
    }
  }
})
</script>
