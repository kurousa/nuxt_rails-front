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
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="ml-2">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
        @click.native="goTo(menu.title)"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => []
      /* 上記は下と同義
      default: function() {
        return []
      }
      */
    },
    imgHeight: {
      type: Number,
      default: 0
    }
  },
  data ({ $config: { appName }, $store }) {
    return {
      appName,
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
