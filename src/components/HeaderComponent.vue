<script setup lang="ts">
import {useStore} from 'vuex';
import {computed} from 'vue';

const store = useStore();
const menu = computed(()=>{
  return store.getters.menu
});
const optionPage = computed(()=>{
  return store.getters.optionPage;
})

</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container py-lg-4">
      <a class="navbar-brand position-lg-absolute" href="#">
<!--        <img src="../assets/logo.png" class="img-fluid" alt="Logo">-->
        <img :src="optionPage.logo.sourceUrl" class="img-fluid" alt="Logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-lg-flex justify-content-lg-center position-relative" id="navbarScroll">
        <ul class="navbar-nav my-2 my-lg-0 me-5" style="--bs-scroll-height: 100px;">
          <li class="nav-item mx-2" v-for="(item, index) in menu.menuItems.nodes" :key="item.id">
            <a class="nav-link text-dark" :class="index===0 ? 'active' : 'fw-bold'" aria-current="page" href="#">{{ item.label }}</a>
            <div v-if="index===0" class="active-line"></div>
          </li>
        </ul>
        <div class="position-absolute end-0">
          <a href="#subscribe" class="btn btn-danger me-4 px-4" type="button" v-smooth-scroll>Subscribe</a>
          <a href="#" class="btn btn-outline-danger px-4" type="button">Sign-in</a>
        </div>
      </div>
    </div>
  </nav>
</template>