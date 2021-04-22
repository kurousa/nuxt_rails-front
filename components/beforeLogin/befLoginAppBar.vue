<template>
  <v-app-bar
    app
    :height="appBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <ui-app-logo />
    </nuxt-link>

    <ui-app-title
      class="hidden-mobile-and-down"
    />

    <v-spacer />

    <signupLink />
    <loginLink />
  </v-app-bar>
</template>

<script>
import loginLink from './loginLink.vue'
import signupLink from './signupLink.vue'

export default {
  components: {
    loginLink,
    signupLink
  },
  data ({ $store }) {
    return {
      appBarHeight: $store.state.styles.beforeLogin.appBarHeight
    }
  }
}
</script>
