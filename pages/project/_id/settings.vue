<template>
  <logged-in-container #my-content>
    <!-- 追加 -->
    {{ $store.state.current.project }}
    <!-- 削除 -->
    <!-- {{ $route.fullPath }} -->
  </logged-in-container>
</template>

<script>
export default {
}
</script>