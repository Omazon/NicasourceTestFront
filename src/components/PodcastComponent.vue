<script setup lang="ts">
import EpisodeComponent from './subcomponets/EpisodeComponent.vue'
</script>
<template>
  <section class="container p-5 bg-white mt-50-reverse shadow">
    <div class="d-flex justify-content-between flex-wrap">
      <h2>Latest Podcast Episodes</h2>
      <a href="#" class="btn btn-danger pt-2 px-4 my-4 my-sm-0">View All</a>
    </div>
    <EpisodeComponent></EpisodeComponent>
    <EpisodeComponent></EpisodeComponent>
    <EpisodeComponent></EpisodeComponent>
    <div class="text-center">
      <div class="spacer-50"></div>
      <a href="#" class="btn btn-outline-danger">Show more Episodes</a>
    </div>
  </section>
</template>