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
                }
            }
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
        }
    },
    actions: {
        async getHome ({commit}){
            try {
                const {result, loading, error} = await useQuery(home);
                watch(result, value => {
                    commit('setMenu', value.menu);
                    commit('setOptionPage', value.themeGeneralSettings.generalOption);
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
        }
    }
});

export default store;