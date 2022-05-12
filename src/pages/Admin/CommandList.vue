<template>
  <q-page class="flex justify-center align-center column">
    <h2>
      Commandes
    </h2>
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="(order, index) of orders" :key="index" :class="'bg-' + color(order)" class="flex justify-between">
        <q-item-label>Numero: {{ order.number }}</q-item-label>
        <q-item-label caption>{{ order.total }}€</q-item-label>
        <q-item-label>
          <div v-if="order.status === 'paid'"></div>
          <template v-else>
            <q-btn dense round color="green" icon="check" />
            <q-btn dense round color="red" icon="cancel" />
          </template>
        </q-item-label>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CommandList',
  setup () {
    const orders = ref([
      { number: 10, status: 'unpaid', total: 10, items: [] },
      { number: 11, status: 'unpaid', total: 22.5, items: [] },
      { number: 12, status: 'paid', total: 13, items: [] },
      { number: 13, status: 'paid', total: 12, items: [] }
    ])
    const colorMapping = {
      unpaid: 'orange-5',
      paid: 'green-5'
    }
    function color ({ status }) {
      return colorMapping[status]
    }
    return {
      orders,
      color
    }
  }
})
</script>
