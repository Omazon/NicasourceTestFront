import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@splidejs/splide/dist/css/splide-core.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/js/splide.min'
import FontAwesomeIcon from './components/fontawesome-icons'
import Lightgallery from 'lightgallery/vue';
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init({
    once: true
});
createApp(App)
    .component('font-awesome-icon',FontAwesomeIcon)
    .component('Lightgallery',Lightgallery)
    .mount('#app')
