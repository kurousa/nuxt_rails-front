<template>
  <v-app-bar
    app
    :dark="!isScrollPoint"
    :height="appBarHeight"
    :color="toolbarStyle.color"
    :elevation="toolbarStyle.elevation"
  >
    <ui-app-logo
      @click.native="goTo('scroll-top')"
    />
    <!-- appTitle Componentsに置き換え -->
    <app-title
      class="hidden-mobile-and-down"
    />
    <!-- <v-toolbar-title
      class="hidden-mobile-and-down"
    >
      {{ appName }}
    </v-toolbar-title> -->
    <v-spacer />
    <v-toolbar-items class="ml-2 hidden-ipad-and-down">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
        :class="{ 'hidden-sm-and-down': (menu.title === 'about') }"
        @click.native="goTo(menu.title)"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
    <signup-link />
    <login-link />
    <v-menu
      bottom
      nudge-left="110"
      nudge-width="100"
    >
      <template #activator="{ on }">
        <v-app-bar-nav-icon
          class="hidden-ipad-and-up"
          v-on="on"
        />
      </template>
      <v-list
        dense
        class="hidden-ipad-and-up"
      >
        <v-list-item
          v-for="(menu, i) in menus"
          :key="`menu-list-${i}`"
          exact
          @click="goTo(menu.title)"
        >
          <v-list-item-title>
            {{ $t(`menus.${menu.title}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import LoginLink from '../beforeLogin/loginLink.vue'
import signupLink from '../beforeLogin/signupLink.vue'
import AppTitle from '../ui/appTitle.vue'

export default {
  components: {
    signupLink,
    LoginLink,
    AppTitle
  },
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    imgHeight: {
      type: Number,
      default: 0
    }
  },
  data ({ $store }) {
    return {
      scrollY: 0,
      appBarHeight: $store.state.styles.beforeLogin.appBarHeight
    }
  },
  computed: {
    isScrollPoint () {
      // 現在のスクロール値がアイキャッチ画像高さ-ツールバーの高さより大きいかどうか
      return this.scrollY > (this.imgHeight - this.appBarHeight)
    },
    toolbarStyle () {
      const color = this.isScrollPoint ? 'white' : 'transparent'
      const elevation = this.isScrollPoint ? 4 : 0
      return { color, elevation }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () { this.scrollY = window.scrollY },
    goTo (id) { this.$vuetify.goTo(`#${id}`) }
  }
}
</script>
