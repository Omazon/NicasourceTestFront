<script setup lang="ts">
import EpisodeComponent from './subcomponets/EpisodeComponent.vue'
import {useStore} from 'vuex';
import {computed} from 'vue';
const store = useStore();

const podcasts = computed(()=>{
  return store.getters.getPodcasts;
})
</script>
<template>
  <section class="container p-5 bg-white mt-50-reverse shadow">
    <div class="d-flex justify-content-between flex-wra align-items-center">
      <h2>Latest Podcast Episodes</h2>
      <a href="#" class="btn btn-danger py-2 px-4 my-4 my-sm-0">View All</a>
    </div>
    <EpisodeComponent v-for="(podcast, index) in podcasts.nodes" :key="podcast.id" :data="podcast" :index="index"/>
    <div class="text-center">
      <div class="spacer-50"></div>
      <a href="#" class="btn btn-outline-danger">Show more Episodes</a>
    </div>
  </section>
</template>