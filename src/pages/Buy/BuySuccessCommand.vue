<template>
    <div class="text-h4 text-center">
      Votre commande a bien été prise en compte !
      <div class="text-h5 text-center q-mt-md" v-if="!isPaid">Veuillez payer au comptoire</div>
      <q-icon name="check" color="teal" class="text-h1"></q-icon>
      <div class="text-h5 text-center q-mt-md">Commande numéro<br> <span class="text-h2"> 120</span></div>
      <div class="q-mx-lg" v-if="!envStore.isTablet">
        <div v-if="roundedProgress !== 1">Commande en cours ...</div>
        <div v-else class="q-mt-xl">C'est prêt ! <br> Retirez votre commande 😛</div>
        <q-linear-progress rounded size="15px" :value="progress" color="secondary" class="q-mt-sm" />
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useEnvStore } from 'stores/env-store'

export default defineComponent({
  data () {
    return {
      progress: 0,
      envStore: useEnvStore()
    }
  },
  computed: {
    isPaid () {
      return this.$route.params.unPaid === 'paid'
    },
    roundedProgress () {
      return Math.round(this.progress * 100) / 100
    }
  },
  mounted () {
    setInterval(() => {
      if (this.progress <= 0.9) {
        this.progress += 0.1
      }
    }, 1300)
  }
})
</script>
