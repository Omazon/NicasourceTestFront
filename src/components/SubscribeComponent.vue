<script setup lang="ts">
import {computed, ref} from 'vue';
import store from '../store';
import axios from 'axios'

const home = computed(()=>{
  return store.getters.getContent;
})
const email = ref('');
const message = ref("Ready to send");
const messageIsVisible = ref(false);
async function sendEmail(){
  let formData = new FormData();
  formData.set("email", email.value);
  const result = await axios.post('http://nicasourcewp.local/wp-json/contact-form-7/v1/contact-forms/74/feedback',formData);
  message.value = result.data.message;
  messageIsVisible.value = true;
}
</script>
<template>
  <div class="container" id="subscribe">
    <div class="spacer-100"></div>
    <h2 class="text-center">
      New Episode Every Week!
    </h2>
    <div class="row">
      <div class="col"></div>
      <div class="col-md-6 col-sm-12">
        <p class="text-center text-secondary" v-html="home"></p>
        <form class="form-inline d-flex">
          <input type="email" class="form-control bg-light" placeholder="Type your Email" v-model="email">
          <button @click="sendEmail()" type="button" class="btn btn-danger me-4 px-5 py-3 d-flex justify-content-center align-items-center w-25 rounded-0">Submit <font-awesome-icon icon="arrow-right-long" style="margin-left: 20px"/></button>
        </form>
        <div v-if="messageIsVisible" class="alert alert-success alert-dismissible w-75 m-auto mt-3" role="alert">
          {{ message }}
          <button @click="messageIsVisible = false" type="button" class="btn-close" aria-label="Close"></button>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>