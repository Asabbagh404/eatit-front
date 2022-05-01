<template>
  <q-dialog
    v-model="showLoginOrProfilModal"
    stack-buttons
    prevent-close
    @cancel="showLoginOrProfilModal = false"
  >
    <q-card class="q-pb-md" style="width: 100%">
      <q-card-section v-if="envStore.isConnected && envStore.uuid">
        <img :src="qrCode" alt="" class="block q-mx-auto">
        <p class="text-h6 text-center">Il vous reste encore <span class="text-primary">3</span> menus avant de remplir votre carte de fidélité O'Malo ! 😋</p>
      </q-card-section>
      <q-card-section v-else>
        <h5 class="text-center q-my-md">Connexion / Inscription</h5>
        <router-link :to="{ name: 'signin' }">
          <ButtonLong color="secondary">Se connecter</ButtonLong>
        </router-link>
        <router-link :to="{ name: 'signup' }">
          <ButtonLong color="secondary">S'inscrire</ButtonLong>
        </router-link>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import ButtonLong from 'components/menu/ButtonLong.vue'
import { useEnvStore } from 'stores/env-store'
import QRCode from 'qrcode'

export default defineComponent({
  name: 'VUser',
  props: {
    value: Boolean
  },
  components: {
    ButtonLong
  },
  setup (props) {
    const envStore = useEnvStore()
    const qrCode = ref(null)
    const showLoginOrProfilModal = computed(() => {
      return props.value
    })
    onMounted(async () => {
      if (envStore.uuid) qrCode.value = await QRCode.toDataURL(envStore.uuid, { width: 300, height: 300 })
    })

    return {
      envStore,
      qrCode,
      showLoginOrProfilModal
    }
  }
})
</script>
