<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
  <Footer />
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: { Navbar, Footer },
  data() {
    return {
      count: 0
    }
  }
}

</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>
