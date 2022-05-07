<template>
    <h1 class="text-weight-bold text-h5 q-my-none">Ma commande</h1>
    <div class="text-h5 text-center q-px-md">
      Votre commande a bien été prise en compte !
      <div class="text-h5 text-center q-mt-md" v-if="!isPaid">Veuillez payer au comptoire</div>
      <q-icon name="check" color="white" class="text-h3 text-white bg-primary rounded-full q-my-md"></q-icon>
      <div class="text-h5 text-center q-mt-md">Commande numéro<br> <span class="text-h2 text-weight-bold"> 120</span></div>
        <div class="q-pa-md">
          <q-stepper
            v-model="currentStep"
            ref="stepper"
            color="primary"
            animated
          >
            <q-step
              :name="step.name"
              icon="settings"
              v-for="(step, index) of steps"
              :done="currentStep > step.order"
              :key="index"
            >
            </q-step>
          </q-stepper>
            <q-stepper-navigation>
              <h5 class="text-weight-bold q-my-none">{{ currentState }}</h5>
            </q-stepper-navigation>
        </div>
<!--      <h5 class="text-weight-bold q-my-none text-left text-subtitle">Mes produits</h5>-->
<!--      <div v-for="(cart, index) of cartStore.cart" :key="index">-->
<!--        {{ cart }}-->
<!--      </div>-->
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useEnvStore } from 'stores/env-store'
import { useCartStore } from 'stores/cart-store'

export default defineComponent({
  data () {
    return {
      envStore: useEnvStore(),
      cartStore: useCartStore(),
      steps: [
        { title: 'Attente de paiement', name: 1, order: 1 },
        { title: 'Commande en préparation', name: 2, order: 2 },
        { title: 'Commande prête', name: 3, order: 3 }
      ],
      currentStep: this.$route.params.unPaid === 'paid' ? 2 : 1
    }
  },
  computed: {
    isPaid () {
      return this.$route.params.unPaid === 'paid'
    },
    currentState () {
      return (this.steps.find((el) => el.order === this.currentStep)).title
    }
  },
  mounted () {
    setInterval(() => {
      if (this.currentStep < 3) {
        this.currentStep++
      }
    }, 3000)
  }
})
</script>

<style>
.q-stepper {
  box-shadow: none;
}
.q-stepper__step-inner {
  display: none;
}
</style>
