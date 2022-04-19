import {createStore} from 'vuex';
import {useQuery, useResult} from '@vue/apollo-composable';
import home from '../client/home';
import {watch} from 'vue';

const store = createStore({
    state(){
        return {
            menu: {
                menuItems:{
                    edges:[]
                }
            },
            optionPage: {
                logo:{
                    sourceUrl:''
                },
                spotify: '',
                apple: '',
                google: '',
                footerText: '',
                instagram: '',
                linkedin: '',
                skype: '',
                facebook: '',
            },
            home:{
                hero:{
                    description:'',
                    rightImage: {
                        sourceUrl: ''
                    },
                    title:''
                },
                gallery:{
                    image:[]
                },
                content:''
            },
            podcasts:[],
            posts:[]
        }
    },
    mutations: {
        setMenu(state, payload){
            // @ts-ignore
            state.menu = payload;
        },
        setOptionPage (state, payload) {
            // @ts-ignore
            state.optionPage = payload;
        },
        setHome (state, payload){
            // @ts-ignore
            state.home = payload;
        },
        setPodcast (state, payload){
            // @ts-ignore
            state.podcasts = payload;
        },
        setPosts(state, payload){
            // @ts-ignore
            state.posts = payload;
        }
    },
    actions: {
        async addHome ({commit}){
            try {
                const {result, loading, error} = await useQuery(home);
                watch(result, value => {
                    commit('setMenu', value.menu);
                    commit('setOptionPage', value.themeGeneralSettings.generalOption);
                    commit('setHome', value.nodeByUri);
                    commit('setPodcast', value.podcasts);
                    commit('setPosts', value.posts)
                })

            } catch (error){
                console.log(error)
            }
        }
    },
    getters: {
        menu (state) {
            // @ts-ignore
            return state.menu;
        },
        optionPage (state){
            // @ts-ignore
            return state.optionPage;
        },
        getHero(state){
            // @ts-ignore
            return state.home.hero
        },
        getGallery(state){
          // @ts-ignore
            return state.home.gallery
        },
        getPodcasts (state){
            // @ts-ignore
            return state.podcasts
        },
        getPosts (state){
            // @ts-ignore
            return state.posts
        },
        getContent(state){
            // @ts-ignore
            return state.home.content;
        }
    }
});

export default store;