<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <VUserModal
        v-model="showLoginOrProfilModal"
      />
      <q-toolbar>
        <q-btn
          v-if="!envStore.isTablet"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <router-link :to="{ name: 'categories' }">
            <img src="~assets/logo_465x320.png" alt="" style="height: 40px" class="block q-my-auto">
          </router-link>
        </q-toolbar-title>
        <q-icon name="person" class="text-h4" @click="showLoginOrProfil" v-if="!envStore.isTablet"></q-icon>
      </q-toolbar>
      <q-bar style="height: 120px" class="row flex-between items-center no-wrap overflow-auto">
        <router-link
          v-for="(category, index) of menuStore.menu"
          :key="index"
          :to="{ name: 'items', params: { categoryId: category.id } }"
          style="min-width: 90px; display: flex; flex-direction: column; justify-content: center; align-items: center;"
        >
          <div class="overflow-hidden row items-center content-center supbar-image-cat" style="height: 70px;width: 70px;border-radius: 100%; background-size: cover; background-position: center" :style="`background-image: url(${category.image})`"></div>
          <div class="supbar-category-text text-center">{{ category.name }}</div>
        </router-link>
      </q-bar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="q-mt-lg"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <q-icon name="arrow_back" class="text-h5 q-pa-sm text-dark q-ma-sm fixed bg-primary shadow-3" style="position: fixed;top: 175px;z-index: 999;border-radius: 100%" @click="router.go(-1)"></q-icon>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        :duration="300"
      >
        <router-view />
      </transition>
    </q-page-container>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" v-if="this.$route.name !== 'cart'">
      <router-link :to="{ name: 'cart' }" >
        <q-btn fab icon="shopping_cart" color="secondary" class="btn-shop">
          <div v-if="cartStore.cart.length > 0" class="font-bold" style="transform: translateY(-7px);">{{ cartStore.totalItemsCart }}</div>
        </q-btn>
      </router-link>
    </q-page-sticky>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" v-else>
      <component
        :is="cartStore.cart.length === 0 ? 'span' : 'router-link'"
        :to="{ name: 'buy' }" >
        <q-btn  class="btn-shop" fab color="primary" :label="'Acheter ' + cartStore.totalCart + ' €'" :disable="cartStore.cart.length === 0"></q-btn>
      </component>
    </q-page-sticky>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import VUserModal from 'components/menu/VUserModal.vue'

import { useCartStore } from 'stores/cart-store'
import { useMenuStore } from 'stores/menu-store'
import { useEnvStore } from 'stores/env-store'

import { useRouter } from 'vue-router'

const linksList = [
  {
    title: 'Menu',
    caption: 'Voir le menu',
    icon: 'restaurant_menu',
    link: '/'
  },
  {
    title: 'Panier',
    caption: 'Voir le panier',
    icon: 'shopping_cart',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Twitter',
    caption: '@OMalo',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@OMalo',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Instagram',
    caption: '@OMalo',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    VUserModal
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const cartStore = useCartStore()
    const menuStore = useMenuStore()
    const envStore = useEnvStore()
    const router = useRouter()
    const showLoginOrProfilModal = ref(false)
    watch(cartStore.cart, () => {
      document.querySelector('.btn-shop').classList.add('animate__pulse')
      setTimeout(() => document.querySelector('.btn-shop').classList.remove('animate__pulse'), 2000)
    })
    function showLoginOrProfil () {
      showLoginOrProfilModal.value = true
    }
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      cartStore,
      menuStore,
      router,
      envStore,
      showLoginOrProfil,
      showLoginOrProfilModal
    }
  }
})
</script>

<style scoped lang="scss">
.animate__pulse {
  transition: all ease .2s;
  animation: pulse;
  animation-duration: 1s;
}
.router-link-active {
  .supbar-category-text {
    opacity: 1;
  }
  .supbar-image-cat {
    opacity: 1;
  }
}
.supbar-category-text {
  opacity: .6;
}
.supbar-image-cat {
  opacity: .6;
}

</style>
