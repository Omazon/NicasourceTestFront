import {createStore} from 'vuex';

const store = createStore({
    state(){
        return {
            count: {
                arroz: 'arroz'
            }
        }
    },
    mutations: {
        increment (state) {
            // @ts-ignore
            state.count++
        }
    },
    getters: {
        menu (state) {
            // @ts-ignore
            return state.count.arroz;
        }
    }
});

export default store;