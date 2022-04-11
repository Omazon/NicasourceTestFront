<script setup lang="ts">

</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container py-lg-4">
      <a class="navbar-brand position-lg-absolute" href="#">
        <img src="../assets/logo.png" class="img-fluid" alt="Logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-lg-flex justify-content-lg-center position-relative" id="navbarScroll">
        <ul class="navbar-nav my-2 my-lg-0 me-5" style="--bs-scroll-height: 100px;">
          <li class="nav-item mx-2">
            <a class="nav-link active text-dark" aria-current="page" href="#">Home</a>
            <div class="active-line"></div>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link fw-bold text-dark" href="#">About</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link fw-bold text-dark" href="#">Episodes</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link fw-bold text-dark" href="#">Blog</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link fw-bold text-dark" href="#">Contact</a>
          </li>
        </ul>
        <div class="position-absolute end-0">
          <a href="#" class="btn btn-danger me-4 px-4" type="button">Subscribe</a>
          <a href="#" class="btn btn-outline-danger px-4" type="button">Sing-in</a>
        </div>
      </div>
    </div>
  </nav>
</template>