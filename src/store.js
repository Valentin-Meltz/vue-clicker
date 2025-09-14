import { createStore } from 'vuex';

export default createStore({
    state: {
        cookies: 0,
        productionAuto: 0,
        generation: 1,
        // Add other state variables for statistique
    },
    mutations: {
        increment(state) {
            state.cookies += state.generation;
        },
        addValue(state, value) {
            state.cookies += value;
        },
        updateGeneration(state){
            state.cookies -= 50;
            state.generation *= 2;
        },
    },
   actions: {
        async addProductionAuto({ commit }) {
            commit('addValue', 1);
        },
        startAutoProduction({ commit, state }) {
            state.cookies -= 150;
            setInterval(() => {
                commit('addValue', state.productionAuto || 1); 
            }, 5000);
        }
    },
    getters: {
        getCookies: state => state.cookies,
        getProductionAuto: state => state.productionAuto,
        // Add getters for statistique
    }
});