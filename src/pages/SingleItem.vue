<template>
  <div>
    {{ item }}
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from "stores/menu-store";
import { useCartStore } from "stores/cart-store";

export default defineComponent({
  setup() {
   const
     cartStore = useCartStore(),
     menuStore = useMenuStore(),
     route = useRoute(),
     itemId = computed(() => {
      return route.params.itemId
    }),
     categoryId = computed(() => {
       return route.params.categoryId
     }),
     category = computed(() => {
       return menuStore.menu.find((el) => {
         return el.id === categoryId
       })
     }),
     item = computed(() => {
       return category.elements.find((el) => {
         return el.id === itemId
       })
     })
    return {
     cartStore,
     item
    }
  }
})
</script>
