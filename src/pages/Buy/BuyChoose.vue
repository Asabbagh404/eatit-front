<template>
    <div class="row q-mt-xl">
      <q-card class="payement-choose-card col-12 col-sm-6 bg-primary flex flex-center" style="height: 300px; width:300px">
        <router-link :to="{ name: 'BuySuccessCommand', params: { status: 'unPaid'} }">
            <q-icon name="wallet" class="text-h1 text-white">
            </q-icon>
            <div class="absolute-bottom text-center text-h4 text-white q-mb-md">
              Paiement au comptoire
            </div>
        </router-link>
      </q-card>
    </div>
    <div class="row q-mt-xl">
      <router-link :to="{ name: 'BuyCard' }">
          <q-card class="payement-choose-card col-12 col-sm-6 bg-primary flex flex-center" style="height: 300px; width:300px">
            <q-icon name="smartphone" class="text-h1 text-white">
            </q-icon>
            <div class="absolute-bottom text-center text-h4 text-white q-mb-md">
              Paiement CB
            </div>
          </q-card>
      </router-link>
    </div>
</template>

<style lang="scss" scoped>
.payement-choose-card {
  transition: all ease .2s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
