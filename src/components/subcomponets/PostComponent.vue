<script setup lang="ts">
import dayjs from 'dayjs';
  const props = defineProps({
    data: {
      required: true
    }
  })
  function dateFormat(date){
    return dayjs(date).format('MMM D, YYYY')
  }
</script>
<template>
  <div class="card border-light shadow py-4 my-3">
    <div class="meta">
      <div class="border-start border-danger border-3 px-5">
        <span class="text-danger fw-bold me-3">By {{ props.data.author.node.firstName }} {{props.data.author.node.lastName}}</span>
        <span class="text-secondary">{{dateFormat(props.date)}}</span><br>
        <span class="text-secondary" v-for="category in props.data.categories.nodes" :key="category.name">{{ category.name }}</span>
      </div>
    </div>
    <div class="card-body px-5">
      <h3 class="card-title">{{props.data.title}}</h3>
      <div class="spacer-50"></div>
      <p class="card-text text-secondary" v-html="props.data.excerpt"></p>
      <a :href="'#'+props.data.link" class="btn btn-outline-danger px-4 mt-3">Read More</a>
    </div>
  </div>
</template>