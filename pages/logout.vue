<template>
  <div />
</template>
<script>
export default {
  async middleware ({ store, redirect, from }) {
    await store.dispatch('logout')
    console.log(from.name)
    if (from.name !== 'index') { return redirect('/') }
  },
  layout: 'logout',
  beforeCreate () {
    this.$router.replace('/')
  }
}
</script>
