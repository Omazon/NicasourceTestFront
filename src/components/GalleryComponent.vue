<script setup lang="ts">
import {useStore} from 'vuex';
import {computed, ref} from 'vue';

const store = useStore()
const gallery = computed(()=>{
  return store.getters.getGallery;
});
let visible = ref(false);
let index= ref(0);
let imgs = ref('');
function showImg(indexVal, data) {
  index.value = indexVal
  visible.value = true;
  imgs.value = data;
}
function handleHide() {
  visible.value = false
}
</script>
<template>
  <section>
    <div class="spacer-100"></div>
    <div class="spacer-50"></div>
    <h2 class="text-center">Our Gallery</h2>
    <div class="image-container container mt-4">
      <pre>{{gallery.image.mediaItemUrl}}</pre>
      <a v-for="(image,index) in gallery.image" class="image" :key="index" @click="() => showImg(index,image.mediaItemUrl)">
        <img class="grid-item" :src="image.sourceUrl" alt="gallery photo"  data-aos="zoom-out" data-aos-delay="800"/>
        <div class="image-overlay top-50 start-50 translate-middle text-light">
          <font-awesome-icon class="black-transparent" icon="link" size="2x" style="color: white;"/>
        </div>
      </a>
      <vue-easy-lightbox
          :visible="visible"
          :imgs="imgs"
          :index="index"
          @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </section>
</template>