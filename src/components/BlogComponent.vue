<script setup lang="ts">
import PostComponent from './subcomponets/PostComponent.vue'
import Splide from '@splidejs/splide'
document.addEventListener( 'DOMContentLoaded', function() {
  let splide = new Splide('.splide',{
    perPage: 3,
    type: 'loop',
    perMove: 1,
    gap: '3rem',
    interval: 5000,
    autoplay: true,
    pagination: false,
    breakpoints: {
      992: {
        perPage: 2
      },
      768: {
        perPage: 1
      }
    }
  });
  splide.mount();
} );
</script>
<template>
  <section>
    <div class="spacer-100"></div>
    <div class="container">
      <h2 class="text-center mb-5">Blog Post</h2>
      <div class="splide" aria-label="Blog Post">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <PostComponent></PostComponent>
            </li>
            <li class="splide__slide">
              <PostComponent></PostComponent>
            </li>
            <li class="splide__slide">
              <PostComponent></PostComponent>
            </li>
          </ul>
        </div>
        <div class="splide__arrows position-absolute translate-middle start-50 mt-5">
          <button class="splide__arrow splide__arrow--prev">
            <font-awesome-icon icon="arrow-left-long" size="2x"/>
          </button>
          <button class="splide__arrow splide__arrow--next">
            <font-awesome-icon icon="arrow-left-long" size="2x"/>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>