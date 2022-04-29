<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
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
      </q-toolbar>
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
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        :duration="300"
      >
        <router-view />
      </transition>
    </q-page-container>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <router-link :to="{ name: 'cart' }" >
        <q-btn fab icon="shopping_cart" color="primary">
          <div v-if="cartStore.cart.length > 0" style="transform: translateY(-7px);font-weight: 900;">{{ cartStore.cart.length }}</div>
        </q-btn>
      </router-link>
    </q-page-sticky>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useCartStore } from 'stores/cart-store'

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
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const cartStore = useCartStore()

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      cartStore
    }
  }
})
</script>
