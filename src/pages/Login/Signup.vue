<template>
  <q-page
    class="row column justify-center items-center"
  >
    <h4 class="text-h5 text-dark q-my-md">S'inscire</h4>
    <q-form class="q-px-sm q-pt-xl">
      <q-input square clearable v-model="email" type="email" label="Email">
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>
      <q-input square clearable v-model="password" type="password" label="Password">
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>
      <ButtonLong>S'inscrire</ButtonLong>
      <router-link :to="{ name: 'categories' }">
        <p class="text-grey-6">Retour à l'accueil</p>
      </router-link>
    </q-form>
  </q-page>
</template>

<script>
import ButtonLong from 'components/menu/ButtonLong.vue'

export default {
  name: 'VSignin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    ButtonLong
  }
}
</script>
