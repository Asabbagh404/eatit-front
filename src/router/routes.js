// import { useCartStore } from 'stores/cart-store'

import { useEnvStore } from 'src/stores/env-store'

const routes = [
  {
    path: '',
    component: () => import('layouts/NoLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue'), name: 'VHome', beforeEnter: isTablet },
      { path: 'admin', component: () => import('pages/Admin/CommandList.vue'), name: 'CommandList', beforeEnter: isAdmin }
    ]
  },
  {
    path: '/categories',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Categories.vue'), name: 'categories' },
      { path: '/:categoryId', component: () => import('pages/Items.vue'), name: 'items' },
      { path: '/:categoryId/:itemId', component: () => import('pages/SingleItem.vue'), name: 'singleItem' },
      { path: '/cart', component: () => import('pages/Cart.vue'), name: 'cart' },
      { path: '/signin', component: () => import('pages/Login/Signin.vue'), name: 'signin' },
      { path: '/signup', component: () => import('pages/Login/Signup.vue'), name: 'signup' },
      {
        path: '/buy',
        component: () => import('pages/Buy/Index.vue'),
        name: 'buy',
        beforeEnter: isCartEmpty,
        redirect: { name: 'BuyChoose' },
        children: [
          { path: 'choose', name: 'BuyChoose', component: () => import('pages/Buy/BuyChoose.vue') },
          { path: 'successCommand/:status', name: 'BuySuccessCommand', component: () => import('pages/Buy/BuySuccessCommand.vue') },
          { path: 'buyCard', name: 'BuyCard', component: () => import('pages/Buy/BuyCard.vue') }
        ]
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }

]

function isCartEmpty () {
  return true
  // const cartStore = useCartStore()
  // return cartStore.cart.length > 0
}

function isTablet () {
  console.log(!!useEnvStore().scanId)
  if (!localStorage.isTablet || useEnvStore().scanId) return { name: 'categories' }
}

function isAdmin () {
  return true
}

export default routes
