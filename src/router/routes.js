// import { useCartStore } from 'stores/cart-store'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: { name: 'categories' } },
      { path: '/categories', component: () => import('pages/Categories.vue'), name: 'categories' },
      { path: '/categories/:id', component: () => import('pages/Items.vue') },
      { path: '/cart', component: () => import('pages/Cart.vue'), name: 'cart' },
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

  // Always leave this as last one,
  // but you can also remove it
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

export default routes
