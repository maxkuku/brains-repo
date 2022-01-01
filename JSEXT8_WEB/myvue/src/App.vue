<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Главная</router-link>
      <router-link to="/cart">Корзина</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('fetchShowCase')
    this.$store.dispatch('fetchCart')
  }
}
</script>


