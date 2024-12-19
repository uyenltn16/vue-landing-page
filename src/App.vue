<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import ScrollToTopButton from './components/ScrollToTopButton.vue';
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
    <ScrollToTopButton />
  </div>
</template>

<style>
</style>
