<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import '@/assets/main.scss';
</script>

<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>