<script setup lang="ts">
import {useStore} from 'vuex';
import {computed} from 'vue';

const store = useStore();

const hero = computed(()=>{
  return store.getters.getHero;
})
const logoPod = computed(()=>{
  return store.getters.optionPage
})
</script>
<template>
  <section class="container-fluid bg-light">
    <div class="spacer-50"></div>
    <div class="container">
      <div class="row">
        <div class="col-md d-flex justify-content-center flex-column fadeInLeft">
          <div class="d-flex align-items-center">
            <div class="red-line-title me-1"></div>
            <span class="text-secondary fw-bold">Trending Episode</span>
          </div>
          <h1 class="font-size-50">{{hero.title}}</h1>
          <p class="text-secondary mt-3">{{hero.description}}</p>
          <div class="d-flex align-items-center">
            <div class="spacer-50"></div>
            <span class="text-secondary fw-bold">Listen On Also</span>
            <div class="red-line-title ms-1"></div>
          </div>
          <div class="d-flex flex-wrap justify-content-between">
            <a href="#" class="hover-shadow">
              <img :src="logoPod.spotify.sourceUrl" alt="spotify">
            </a>
            <a href="#" class="hover-shadow">
              <img :src="logoPod.google.sourceUrl" alt="google">
            </a>
            <a href="#" class="hover-shadow">
              <img :src="logoPod.apple.sourceUrl" alt="apple">
            </a>
          </div>
        </div>
        <div class="col-md d-flex justify-content-center flex-column" data-aos="fade-up">
          <img class="text-center img-fluid image-rotate" :src="hero.rightImage.sourceUrl" alt="Micro Image">
        </div>
      </div>
    </div>
    <div class="spacer-100"></div>
  </section>
</template>