<template>
  <section>
    <div class="spacer-100"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img src="../assets/logo.png" alt="logo" class="img-fluid">
          <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aut fugiat ipsam</p>
          <div class="social">
            <a href="#" class="mx-2">
              <font-awesome-icon :icon="[ 'fab', 'facebook-f' ]" style="background: #0b2342; color: white; padding: 10px 13px; border-radius: 50%"/>
            </a>
            <a href="#" class="mx-2">
              <font-awesome-icon :icon="[ 'fab', 'linkedin-in' ]" style="background: #0b2342; color: white; padding: 10px 13px; border-radius: 50%"/>
            </a>
            <a href="#" class="mx-2">
              <font-awesome-icon :icon="[ 'fab', 'instagram' ]" style="background: #0b2342; color: white; padding: 10px 13px; border-radius: 50%"/>
            </a>
            <a href="#" class="mx-2">
              <font-awesome-icon :icon="[ 'fab', 'skype' ]" style="background: #0b2342; color: white; padding: 10px 13px; border-radius: 50%"/>
            </a>
          </div>
        </div>
        <div class="col-sm-2 d-flex flex-column justify-content-between">
          <span class="text-black fw-bold">Pages</span>
          <a href="" class="text-secondary fw-bold text-decoration-none">About</a>
          <a href="" class="text-secondary fw-bold text-decoration-none">Episode</a>
          <a href="" class="text-secondary fw-bold text-decoration-none">Blog</a>
          <a href="" class="text-secondary fw-bold text-decoration-none">Contact</a>
        </div>
        <div class="col-sm-2 d-flex flex-column justify-content-between">
          <span class="text-black fw-bold">Recent Episodes</span>
          <a href="" class="text-secondary fw-bold text-decoration-none">Episode 1</a>
          <a href="" class="text-secondary fw-bold text-decoration-none">Episode 2</a>
          <a href="" class="text-secondary fw-bold text-decoration-none">Episode 3</a>
          <a href="" class="text-secondary fw-bold text-decoration-none">Episode 4</a>
        </div>
        <div class="col-sm-2 d-flex flex-column justify-content-between align-items-baseline">
          <span class="text-black fw-bold">Listen My Podcast also in</span>
          <a href="">
            <img src="../assets/listenGooglePodcast.jpg" alt="" class="img-fluid">
          </a>
          <a href="">
            <img src="../assets/listenApple.jpg" alt="" class="img-fluid">
          </a>
          <a href="">
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