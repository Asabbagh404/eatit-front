<template>
    <div class="text-h4 text-center">
      Votre commande a bien été prise en compte !
      <div class="text-h5 text-center q-mt-md" v-if="!isPaid">Veuillez payer au comptoire</div>
      <q-icon name="check" color="teal" class="text-h1"></q-icon>
      <div class="text-h5 text-center q-mt-md">Commande numéro <br> <span class="text-h2">120</span></div>

    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    isPaid () {
      return this.$route.params.unPaid === 'paid'
    }
  }
})
</script>
