import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/core';
import FontAwesomeIcon from './components/fontawesome-icons'
import 'aos/dist/aos.css'
import AOS from 'aos'
import store from './store';
import {DefaultApolloClient} from '@vue/apollo-composable';
import apolloClient from './client';
import Vue3SmoothScroll from 'vue3-smooth-scroll';
import VueSplide from '@splidejs/vue-splide';
import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.es5.esm.min.js'
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css'
AOS.init({
    once: true
});
createApp(App)
    .component('font-awesome-icon',FontAwesomeIcon)
    .use(store)
    .use( VueSplide )
    .use(Vue3SmoothScroll)
    .use(VueEasyLightbox)
    .provide(DefaultApolloClient, apolloClient)
    .mount('#app')
