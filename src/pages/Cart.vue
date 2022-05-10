<template>
  <q-page class="flex flex-center column">
    <div>
      <h2 class="text-title q-mb-none text-center text-bold">Panier</h2>
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
          <ComplementSelector v-model="onModifyElement" v-model:errors="errors"></ComplementSelector>
          <q-card-actions>
          <q-btn
            class="q-my-md q-mx-auto bg-primary text-white"
            style="width: 200px"
            :disable="!noErrors"
          >
            Valider
          </q-btn>
        </q-card-actions>
        </div>
      </q-card>
    </q-dialog>
    <div class="q-pa-md full-width">
      <div class="row">
        <q-card
          v-for="(element, index) in cartStore.cart"
          :key="index"
          class="bg-grey-2 row card-border-radius col-12 full-width shadow-custom-1 q-mt-lg"
          style="height: 160px;"
        >
          <div style="height: 100%;width: 35%;border-radius: 12px 0 0 12px;" :style="`background: url('${ element.image }');background-size: cover;background-position: center;`" class="overflow-hidden row content-center float-left">
            <q-icon name="info" class="absolute text-dark text-h5" color="dark" style="left: 10px; top: 5px; border-radius: 100%" @click.stop="showDetailModal(element)"></q-icon>
          </div>
          <div style="width: 65%">
            <q-card-section class="relative-position full-height">
              <q-icon
                @click="deleteElement(index)"
                name="clear"
                style="top: 5px; right: 5px"
                size="sm"
                class="absolute text-h4 text-weight-bold"
              ></q-icon>
              <div class="text-h6 text-bold">{{ element.name }}</div>
              <div class="text-caption text-dark">{{ textAbstract(element.description, 30) }}</div>
              <div class="text-h6" style="border-radius: 20px">
                <q-btn @click="modifyQte(index, false)" icon="remove" color="primary" round dense />
                <span class="q-mx-sm text-grey-8">{{ element.quantity || 1 }}x</span>
                <q-btn @click="modifyQte(index, true)" icon="add" color="primary" round dense />
              </div>
              <div class="row justify-between content-center items-end absolute" style="padding: 0 5px 0 5px;width: 100%;bottom: 0;left: 6px;">
                <span class="text-h4 text-bold q-mt-md">{{ splitDecimal(cartStore.elementTotalPrice(element))[0] }}.<span class="text-h6 text-bold">{{ splitDecimal(cartStore.elementTotalPrice(element))[1] }}€</span></span>
                <IconCardRight icon="edit" @click="modifyElement(element)"/>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>
    <BottomTotal :total="+cartStore.totalCart" :disable="disable" :expanded="isExpandedBottomTotal" @btnClick="toggleExpand">
      <template v-slot:expanded-content>
        <router-link :to="{ name: 'BuyCard' }">
          <ButtonLong color="primary" icon="smartphone" text-color="white" size="lg" width="90%">Paiement en ligne</ButtonLong>
        </router-link>
        <router-link :to="{ name: 'BuySuccessCommand', params: { status: 'unPaid'} }">
          <ButtonLong color="primary" icon="wallet" text-color="white" size="lg" width="90%">Paiement au comptoire</ButtonLong>
        </router-link>
      </template>
      <component
        :is="isTabletAndNotEmpty ? 'router-link' : 'span'"
        :to="{ name: 'BuySuccessCommand', params: { status: 'unPaid'} }"
      >
        <div >{{ isExpandedBottomTotal ? 'Fermer le contenu' : 'Valider la commande' }}</div>
      </component>

    </BottomTotal>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useCartStore } from 'stores/cart-store'
import BottomTotal from './../components/menu/BottomTotal.vue'
import ButtonLong from './../components/menu/ButtonLong.vue'
import ComplementSelector from 'components/menu/ComplementSelector.vue'
import IconCardRight from 'components/IconCardRight.vue'
import { splitDecimal } from 'src/mixins/splitDecimal'
import { textAbstract } from '../mixins/textAbstract'

export default defineComponent({
  name: 'VCart',
  components: {
    BottomTotal,
    ButtonLong,
    IconCardRight,
    ComplementSelector
  },
  setup () {
    const cartStore = useCartStore()
    const onModifyElement = ref(null)
    const isOpenModifyModal = ref(false)
    const isExpandedBottomTotal = ref(false)
    const errors = ref({})
    const disable = computed(() => {
      return cartStore.cart.length === 0
    })
    const noErrors = computed(() => {
      return Object.keys(errors.value).length === 0
    })
    const isTabletAndNotEmpty = computed(() => {
      return localStorage.isTablet && !disable.value
    })
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
    function showDetailModal (element) {
      isOpenModifyModal.value = true
      onModifyElement.value = element
    }
    function toggleExpand () {
      if (disable.value) return
      isExpandedBottomTotal.value = !isExpandedBottomTotal.value
    }
    return {
      cartStore,
      modifyQte,
      deleteElement,
      modifyElement,
      isOpenModifyModal,
      onModifyElement,
      splitDecimal,
      textAbstract,
      errors,
      showDetailModal,
      isExpandedBottomTotal,
      toggleExpand,
      disable,
      isTabletAndNotEmpty,
      noErrors
    }
  }
})
</script>
