<template>
  <q-page class="flex flex-center">
    <div class="row">
      <q-card class="payement-choose-card col-12 col-sm-6 bg-primary flex flex-center" style="height: 300px; width:300px">
        <router-link :to="{ name: 'categories' }">
          <q-icon name="qr_code" class="text-h1 text-white">
          </q-icon>
          <div class="absolute-bottom text-center text-h4 text-white q-mb-md">
            Scan carte fidélité
          </div>
        </router-link>
      </q-card>
    </div>
    <div class="row">
      <router-link :to="{ name: 'categories' }">
        <q-card class="payement-choose-card col-12 col-sm-6 bg-primary flex flex-center" style="height: 300px; width:300px">
          <q-icon name="person" class="text-h1 text-white">
          </q-icon>
          <div class="absolute-bottom text-center text-h4 text-white q-mb-md">
            Continuer sans scanner
          </div>
        </q-card>
      </router-link>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useEnvStore } from 'stores/env-store'

export default defineComponent({
  name: 'VHome',
  mounted () {
    const envStore = useEnvStore()
    if (!envStore.isTablet) this.$router.push({ name: 'categories' })
  }
})
</script>

<style lang="scss" scoped>
.payement-choose-card {
  transition: all ease .2s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
