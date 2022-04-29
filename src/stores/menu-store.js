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
            ingredients: ['tomate', 'salade', 'steak', 'fromage'],
            isMenuable: true
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
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
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          }
        ]
      },
      {
        id: 3,
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        elements: [
          {
            id: 1,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          }
        ]
      },
      {
        id: 4,
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        elements: [
          {
            id: 1,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          }
        ]
      },
      {
        id: 5,
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        elements: [
          {
            id: 1,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          }
        ]
      },
      {
        id: 6,
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        elements: [
          {
            id: 1,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          }
        ]
      },
      {
        id: 7,
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        elements: [
          {
            id: 1,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 2,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 3,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          },
          {
            id: 4,
            name: 'Cheesburger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
            description: 'La recette traditionelle du burger avec du fromage au cheddar et un steak fumée.',
            price: 10,
            ingredients: ['tomate', 'salade', 'steak', 'fromage']
          }
        ]
      }
    ]
  })
})
