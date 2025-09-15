import { createStore } from 'vuex';

export default createStore({
    state: {
        cookies: 0,
        productionAuto: 0,
        generation: 1,
        productionAutoCost: 100,
        generationCost: 50,
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
            state.cookies -= state.generationCost;
            state.generation *= 2;
            state.generationCost *= 2;
        },
        updateProductionAuto(state){
            state.cookies -= state.productionAutoCost;
            state.productionAuto *= 2;
            state.productionAutoCost *= 2;
        }
    },
   actions: {
        async addProductionAuto({ commit }) {
            commit('addValue', 1);
        },
        startAutoProduction({ commit, state }) {
            state.cookies -= 150;
            state.productionAuto += 1;
            
            setInterval(() => {
                commit('addValue', state.productionAuto); 
            }, 1000);
        }
    },
    getters: {
        getCookies: state => state.cookies,
        getProductionAuto: state => state.productionAuto,
        getGeneration: state => state.generation,
        getProductionAutoCost: state => state.productionAutoCost,
        getGenerationCost: state => state.generationCost,
        // Add getters for statistique
    }
});