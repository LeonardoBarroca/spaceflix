<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>

</style>
