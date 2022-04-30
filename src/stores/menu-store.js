import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menu: [
      {
        id: 1,
        name: 'Burgers',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
        elements: [
          {
            id: 1,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true },
            isMenuable: true
          },
          {
            id: 2,
            name: 'Burger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger au steak fumée.',
            price: 12,
            ingredients: { tomate: true, salade: true, steak: true }
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          }
        ]
      },
      {
        id: 2,
        name: 'Kebab',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80',
        elements: [
          {
            id: 1,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          }
        ]
      },
      {
        id: 3,
        name: 'Pizzas',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        elements: [
          {
            id: 1,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          }
        ]
      },
      {
        id: 4,
        name: 'Boissons',
        image: 'https://images.unsplash.com/photo-1606943932434-2f21e1c54ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2700&q=80',
        elements: [
          {
            id: 1,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          }
        ]
      },
      {
        id: 5,
        name: 'Snacks',
        image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        elements: [
          {
            id: 1,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          }
        ]
      },
      {
        id: 6,
        name: 'Sauces',
        image: 'https://images.unsplash.com/photo-1622268349641-4c814e2cc806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        elements: [
          {
            id: 1,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: { tomate: true, salade: true, steak: true, fromage: true }
          }
        ]
      }
    ]
  })
})
