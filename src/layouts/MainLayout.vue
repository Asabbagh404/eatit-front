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
      <q-bar style="height: 70px" class="row flex-between items-center no-wrap overflow-auto overflow-hidden-y">
        <router-link
          v-for="(category, index) of menuStore.menu"
          :key="index"
          :to="{ name: 'items', params: { categoryId: category.uuid } }"
        ><p style="min-width: 80px; margin:0 10px; display: flex; flex-direction: column; justify-content: center; align-items: center;white-space: pre"
        >{{ shortContent(category.name) }}</p>
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
      <q-icon name="arrow_back" class="text-h5 q-pa-sm text-dark q-ma-sm fixed bg-primary shadow-custom-1" style="position: fixed;top: 125px;z-index: 999;border-radius: 100%" @click="router.go(-1)"></q-icon>
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
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import VUserModal from 'components/menu/VUserModal.vue'

import { useCartStore } from 'stores/cart-store'
import { useRestaurantStore } from 'stores/restaurant-store'
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
    const menuStore = useRestaurantStore()
    const envStore = useEnvStore()
    const router = useRouter()
    const showLoginOrProfilModal = ref(false)
    watch(cartStore.cart, () => {
      const btnShop = document.querySelector('.btn-shop')
      if (!btnShop) return
      btnShop.classList.add('animate__pulse')
      setTimeout(() => btnShop.classList.remove('animate__pulse'), 2000)
    })
    function showLoginOrProfil () {
      showLoginOrProfilModal.value = true
    }
    function shortContent (str) {
      return '' + str.substr(0, 15)
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
      showLoginOrProfilModal,
      shortContent
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
