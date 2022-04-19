<script setup lang="ts">
import {useStore} from 'vuex';
import {computed} from 'vue';

const store = useStore();
const optionPage = computed(()=>{
  return store.getters.optionPage;
})
const menu = computed(()=>{
  return store.getters.menu;
})
const podcasts = computed(()=>{
  return store.getters.getPodcasts;
})
</script>
<template>
  <section>
    <div class="spacer-100"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img :src="optionPage.logo.sourceUrl" alt="logo" class="img-fluid">
          <p class="text-secondary">{{ optionPage.footerText }}</p>
          <div class="social">
            <a :href="'#'+optionPage.facebook" class="mx-2">
              <font-awesome-icon :icon="[ 'fab', 'facebook-f' ]" style="background: #0b2342; color: white; padding: 10px 13px; border-radius: 50%"/>
            </a>
            <a :href="'#'+optionPage.linkedin" class="mx-2">
              <font-awesome-icon :icon="[ 'fab', 'linkedin-in' ]" style="background: #0b2342; color: white; padding: 10px 13px; border-radius: 50%"/>
            </a>
            <a :href="'#'+optionPage.instagram" class="mx-2">
              <font-awesome-icon :icon="[ 'fab', 'instagram' ]" style="background: #0b2342; color: white; padding: 10px 13px; border-radius: 50%"/>
            </a>
            <a :href="'#'+optionPage.skype" class="mx-2">
              <font-awesome-icon :icon="[ 'fab', 'skype' ]" style="background: #0b2342; color: white; padding: 10px 13px; border-radius: 50%"/>
            </a>
          </div>
        </div>
        <div class="col-sm-2 d-flex flex-column justify-content-between">
          <span class="text-black fw-bold">Pages</span>
          <a v-for="item in menu.menuItems.nodes" href="#" class="text-secondary fw-bold text-decoration-none" :key="item.id">{{ item.label }}</a>
        </div>
        <div class="col-sm-2 d-flex flex-column justify-content-between">
          <span class="text-black fw-bold">Recent Episodes</span>
          <a v-for="item in podcasts.nodes" :key="item.id" href="" class="text-secondary fw-bold text-decoration-none">{{ item.title }}</a>
        </div>
        <div class="col-sm-2 d-flex flex-column justify-content-between align-items-baseline">
          <span class="text-black fw-bold">Listen My Podcast also in</span>
          <a :href="'#'+optionPage.google">
            <img src="../assets/listenGooglePodcast.jpg" alt="" class="img-fluid">
          </a>
          <a :href="'#'+optionPage.apple">
            <img src="../assets/listenApple.jpg" alt="" class="img-fluid">
          </a>
          <a :href="'#'+optionPage.spotify">
            <img src="../assets/listenSpotify.jpg" alt="" class="img-fluid">
          </a>
        </div>
      </div>
      <div class="spacer-100"></div>
      <hr>
      <div class="footer-bottom text-center text-secondary py-5">
        <span>@2022 Nicasource All Right Reserved</span>
      </div>
    </div>
  </section>
</template>