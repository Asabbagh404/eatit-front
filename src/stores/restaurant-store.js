import { defineStore } from 'pinia'
import { socket } from '../lib/socket-connect'

export const useRestaurantStore = defineStore('restaurant', {
  state: () => ({
    restaurant: null,
    menu: null
  }),
  getters: {
    getCategoryById () {
      return (categoryId) => {
        if (!this.menu) return {}
        this.menu.find(el => el.uuid === categoryId)
      }
    },
    getItemsByCategoryIdAndId () {
      return (catId, itemId) => {
        if (!this.menu) return {}
        const category = this.getCategoryById(catId)
        category.items.find((el) => {
          return el.uuid === itemId
        })
      }
    }
  },
  actions: {
    getRestaurant () {
      socket.getRestaurant((res) => {
        this.restaurant = res.restaurant
      })
      return this.restaurant
    },
    getMenu () {
      this.restaurant = socket.getMenu((res) => {
        this.menu = res.menu.categories
      })
      return this.menu
    }
  }
})

// [
// {
//   id: 1,
//   name: 'Burgers',
//   image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//   elements: [
//     {
//       id: 1,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10,
//       ingredients: { tomate: true, salade: true, steak: true, fromage: true },
//       extras: [
//         { name: 'Boursin', value: false, price: 0.5 },
//         { name: 'Double steak', value: false, price: 1 }
//       ],
//       propositions: [10, 20],
//       isMenuable: true
//     },
//     {
//       id: 2,
//       name: 'Burger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger au steak fumée.',
//       price: 12,
//       ingredients: { tomate: true, salade: true, steak: true }, // TODO: PASS TO COLLECTION
//       extras: [
//         { name: 'boursin', value: false, price: 0.5 },
//         { name: 'double steak', value: false, price: 1 }
//       ],
//       complements: [
//         {
//           name: 'sauce',
//           value: [
//             {
//               name: 'Biggy',
//               value: false,
//               price: 0
//             },
//             {
//               name: 'BBQ',
//               value: false,
//               price: 0
//             },
//             {
//               name: 'Ketchup',
//               value: false,
//               price: 0
//             },
//             {
//               name: 'Mayonnaise',
//               value: false,
//               price: 0
//             }
//           ],
//           price: 0
//         },
//         {
//           name: 'cuisson',
//           value: [
//             { name: 'Saignant', value: false, price: 0 },
//             { name: 'A point', value: false, price: 0 }
//           ],
//           price: 0
//         }
//       ]
//     },
//     {
//       id: 3,
//       name: 'Blue cheese',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 4,
//       name: 'Tex-mex',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 5,
//       name: 'Giant',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 6,
//       name: 'Long beef',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 7,
//       name: 'CBO',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     }
//   ]
// },
// {
//   id: 2,
//   name: 'Kebab',
//   image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80',
//   elements: [
//     {
//       id: 5,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 6,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 7,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 8,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     }
//   ]
// },
// {
//   id: 3,
//   name: 'Pizzas',
//   image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//   elements: [
//     {
//       id: 9,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 10,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 11,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 12,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     }
//   ]
// },
// {
//   id: 4,
//   name: 'Boissons',
//   image: 'https://images.unsplash.com/photo-1606943932434-2f21e1c54ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2700&q=80',
//   elements: [
//     {
//       id: 12,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 14,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 15,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 16,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     }
//   ]
// },
// {
//   id: 5,
//   name: 'Snacks',
//   image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
//   elements: [
//     {
//       id: 17,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 18,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 19,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 20,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     }
//   ]
// },
// {
//   id: 6,
//   name: 'Sauces',
//   image: 'https://images.unsplash.com/photo-1622268349641-4c814e2cc806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
//   elements: [
//     {
//       id: 21,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 22,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 23,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     },
//     {
//       id: 24,
//       name: 'Cheesburger',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
//       description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
//       price: 10
//     }
//   ]
// }
// ]
