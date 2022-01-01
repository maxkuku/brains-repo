<template>
  <div class="home">
    <Search/>
    <ShowCase/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '../components/Search.vue'
import ShowCase from '../components/ShowCase.vue'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: { // подключаем компонент из папки components
    Search,
    ShowCase,
    Card
  }
}
</script>
