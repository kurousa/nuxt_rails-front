<template>
  <v-app>
    <beforeLogin-bef-login-app-bar />
    <v-main>
      <nuxt />
    </v-main>
    <bef-login-footer />
  </v-app>
</template>

<script>
import befLoginFooter from '../components/beforeLogin/befLoginFooter.vue'
export default {
  components: { befLoginFooter }
}
</script>
