import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/core';
import FontAwesomeIcon from './components/fontawesome-icons'
import Lightgallery from 'lightgallery/vue';
import 'aos/dist/aos.css'
import AOS from 'aos'
import store from './store';
import {DefaultApolloClient} from '@vue/apollo-composable';
import apolloClient from './client';
import Vue3SmoothScroll from 'vue3-smooth-scroll';
import VueSplide from '@splidejs/vue-splide';

AOS.init({
    once: true
});
createApp(App)
    .component('font-awesome-icon',FontAwesomeIcon)
    .component('Lightgallery',Lightgallery)
    .use(store)
    .use( VueSplide )
    .use(Vue3SmoothScroll)
    .provide(DefaultApolloClient, apolloClient)
    .mount('#app')
