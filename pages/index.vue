<template>
  <div>
    index.vue
  </div>
</template>

<script>
export default {
  layout ({ store }) {
    console.log(store.state.loggedIn)
    return store.state.loggedIn ? 'default' : 'welcome'
  }
}
</script>
