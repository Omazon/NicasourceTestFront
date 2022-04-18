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
                spotify:{
                    sourceUrl:''
                },
                apple:{
                    sourceUrl:''
                },
                google:{
                    sourceUrl:''
                },
            },
            home:{
                hero:{
                    description:'',
                    rightImage: {
                        sourceUrl: ''
                    },
                    title:''
                }
            },
            podcasts:[]
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
                    commit('setPodcast', value.podcasts)
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
        getPodcasts (state){
            // @ts-ignore
            return state.podcasts
        }
    }
});

export default store;