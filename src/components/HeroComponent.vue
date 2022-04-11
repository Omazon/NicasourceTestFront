<script setup lang="ts"></script>
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
          <h1 class="font-size-50">Lorem ipsum dolor sit amet, consectetur </h1>
          <p class="text-secondary mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cumque delectus
            distinctio esse est exercitationem in maiores, non, officia possimus quam vel veritatis? Exercitationem,
            ipsam maiores nobis quaerat tenetur voluptates.</p>
          <div class="d-flex align-items-center">
            <div class="spacer-50"></div>
            <span class="text-secondary fw-bold">Listen On Also</span>
            <div class="red-line-title ms-1"></div>
          </div>
          <div class="d-flex flex-wrap justify-content-between">
            <a href="#" class="hover-shadow">
              <img src="../assets/listenSpotify.jpg" alt="spotify">
            </a>
            <a href="#" class="hover-shadow">
              <img src="../assets/listenGooglePodcast.jpg" alt="google">
            </a>
            <a href="#" class="hover-shadow">
              <img src="../assets/listenApple.jpg" alt="apple">
            </a>
          </div>
        </div>
        <div class="col-md d-flex justify-content-center flex-column" data-aos="fade-up">
          <img class="text-center img-fluid image-rotate" src="../assets/micro.jpg" alt="Micro Image">
        </div>
      </div>
    </div>
    <div class="spacer-100"></div>
  </section>
</template>