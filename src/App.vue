<template>
<header class="header">
  <h1>github finder</h1>
</header>
<main class="main">
   <Search />
   <h2 class="error" v-if="error != ''">{{error}}</h2>
   <User />
   <Repos />
</main>
</template>
<script>
import { mapState } from "vuex";
import Repos from './components/Repos.vue';
import Search from './components/Search.vue'
import User from './components/User.vue'
export default {
  components: { Search, User, Repos },
  computed: {
    ...mapState(['error'])
  },
}
</script>
<style lang="scss">
  
</style>