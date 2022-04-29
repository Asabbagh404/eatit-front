
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: { name: 'categories' } },
      { path: '/categories', component: () => import('pages/Categories.vue'), name: 'categories' },
      { path: '/categories/:id', component: () => import('pages/Items.vue') },
      { path: '/cart', component: () => import('pages/Cart.vue'), name: 'cart' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
