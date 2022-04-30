<template>
  <q-page class="flex flex-center column">
    <div>
      <h2 class="text-h2 q-mb-none text-center">Panier</h2>
      <div class="text-h3 text-teal q-mt-md block">TOTAL {{ cartStore.totalCart }} €</div>
    </div>
    <q-dialog
      v-model="isOpenModifyModal"
      stack-buttons
      prevent-close
      @cancel="isOpenModifyModal = false"
    >
      <q-card class="q-pb-md" style="width: 300px">
        <q-card-section class="bg-primary text-white q-px-xl">
          <div class="text-h6">Un&nbsp;commentaire&nbsp;? <br> Ajoute le ici 👍</div>
        </q-card-section>
        <div class="q-mx-lg">
          <q-input
            v-model="onModifyElement.commentary"
            type="text"
            label="Commentaire"
            class="q-mt-lg"
          />
          <div>
            <h5 class="q-my-md" v-if="onModifyElement.ingredients">Ingredients</h5>
            <q-checkbox
              v-for="(ing, i) in onModifyElement.ingredients"
              :key="i"
              :label="i"
              v-model="onModifyElement.ingredients[i]"
            >
            </q-checkbox>
          </div>

          <div>
            <h5 class="q-my-md" v-if="onModifyElement.extras">Extras</h5>
            <q-checkbox
              v-for="(ing, i) in onModifyElement.extras"
              :key="i"
              :label="ing.name"
              v-model="onModifyElement.extras[i].value"
            >
            </q-checkbox>
          </div>
        </div>
        <q-card-actions>
          <q-btn
            class="q-my-md q-mx-auto bg-primary text-white"
            style="width: 200px"
          >
            Valider
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div class="q-pa-md">
      <div class="row">
        <q-card
          class="col-12 q-pr-sm q-mt-lg"
          v-for="(element, index) in cartStore.cart"
          :key="index"
        >
          <div
            style="height: 150px"
            class="overflow-hidden row content-center"
          >
            <q-icon
              @click="deleteElement(index)"
              name="delete"
              style="top: 5px; left: 5px"
              class="absolute text-red-5 text-h4"
            ></q-icon>
            <q-icon
              @click="modifyElement(element)"
              name="edit"
              style="top: 5px; left: 45px"
              class="absolute text-white text-h4"
            ></q-icon>
            <img :src="element.image" style="width: 100%;">
          </div>
          <q-card-section>
            <div class="row justify-between">
              <div class="text-h6">{{ element.name }}</div>
              <div class="text-h6 bg-grey-4" style="border-radius: 20px">
                <q-btn @click="modifyQte(index, false)" icon="remove" color="primary" round />
                <span class="q-mx-md">{{ element.quantity || 1 }}</span>
                <q-btn @click="modifyQte(index, true)" icon="add" color="primary" round /></div>
            </div>
<!--            <div class="q-my-sm">{{ element.description }}</div>-->
            <span class="text-h5">{{ element.price * (element.quantity || 1) }} €</span>
            <div v-for="(extra, index) of element.extras" :key="index" class="text-right">
              <q-chip v-if="extra.value" :label="extra.name" color="secondary" class="text-white"></q-chip>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useCartStore } from 'stores/cart-store'

export default defineComponent({
  name: 'VCart',
  setup () {
    const cartStore = useCartStore()
    const onModifyElement = ref(null)
    const isOpenModifyModal = ref(false)

    function modifyQte (index, dir) {
      cartStore.modifyQte(index, dir)
    }
    function deleteElement (index) {
      cartStore.deleteElement(index)
    }
    function modifyElement (element) {
      onModifyElement.value = element
      isOpenModifyModal.value = true
    }
    return {
      cartStore,
      modifyQte,
      deleteElement,
      modifyElement,
      isOpenModifyModal,
      onModifyElement
    }
  }
})
</script>
