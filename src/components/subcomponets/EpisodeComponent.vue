<script setup lang="ts">
import dayjs from 'dayjs';

const props = defineProps({
  data : {
    required: true
  },
  index: {
    required: true
  }
})
function dateFormat(date){
  return dayjs(date).format('MMM D, YYYY')
}
</script>
<template>
  <div class="row" data-aos="fade-right">
    <div class="col-md-3 p-3">
      <div class="position-relative text-center">
        <img v-if="props.index ===0" class="position-absolute mt-n10 r-15p" src="../../assets/newTag.png" alt="New Tag to First">
        <img class="img-fluid" :src="data.featuredImage.node.sourceUrl" :alt="props.data.title">
      </div>
    </div>
    <div class="col-md p-3 d-flex flex-column justify-content-between align-items-baseline">
      <h2>{{props.data.title}}</h2>
      <p class="text-secondary" v-html="props.data.excerpt"></p>
      <a :href="'#'+props.data.link" class="btn btn-outline-danger px-4">Know more</a>
    </div>
    <div class="col-md-3 p-3 d-flex flex-column justify-content-center">
      <div class="border-start ps-5 py-3">
        <p class="text-muted" v-for="category in props.data.categories.nodes" :key="category.name"># {{ category.name }}</p>
        <p class="text-muted"># Posted on {{dateFormat(props.date)}}</p>
<!--        <p class="text-muted"># audio / goodbyes / life</p>-->
        <p class="text-muted">#
          <span v-for="(tag, index) in props.data.tags.nodes" :key="tag.name">{{index > 0 ? ' / ' : ''}}{{tag.name}}</span>
        </p>
      </div>
    </div>
  </div>
</template>