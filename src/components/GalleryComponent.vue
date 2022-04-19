<script setup lang="ts">
import {useStore} from 'vuex';
import {computed} from 'vue';

const store = useStore()
const gallery = computed(()=>{
  return store.getters.getGallery;
})

</script>
<template>
  <section>
    <div class="spacer-100"></div>
    <div class="spacer-50"></div>
    <h2 class="text-center">Our Gallery</h2>
    <div class="image-container container mt-4">
      <div id="lightgallery">
        <a v-for="(image,index) in gallery.image" :href="image.mediaItemUrl" class="image"  :key="index">
          <img class="grid-item" :src="image.sourceUrl" alt="gallery photo"  data-aos="zoom-out" data-aos-delay="800"/>
          <div class="image-overlay top-50 start-50 translate-middle text-light">
            <font-awesome-icon class="black-transparent" icon="link" size="2x" style="color: white;"/>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>