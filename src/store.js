import { createStore } from 'vuex';

export default createStore({
    state: {
        cookies: 0,
        productionAuto: 0,
        generation: 1,
        productionAutoCost: 100,
        generationCost: 50,
        isAutoProductionStarted: false,
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
        },
        setState(state, newState) {
            state.cookies = newState.cookies;
            state.productionAuto = newState.productionAuto;
            state.generation = newState.generation;
            state.productionAutoCost = newState.productionAutoCost;
            state.generationCost = newState.generationCost;
            state.isAutoProductionStarted = newState.isAutoProductionStarted;
        },
    },
   actions: {
        async addProductionAuto({ commit }) {
            commit('addValue', 1);
        },
        startAutoProduction({ commit, state }) {
            state.isAutoProductionStarted = true;
            state.cookies -= 150;
            state.productionAuto += 1;
            
            setInterval(() => {
                commit('addValue', state.productionAuto); 
            }, 1000);
        },
        saveState({ state }) {
            const gameState = {
                cookies: state.cookies,
                productionAuto: state.productionAuto,
                generation: state.generation,
                productionAutoCost: state.productionAutoCost,
                generationCost: state.generationCost,
                isAutoProductionStarted: state.isAutoProductionStarted,
            };
            localStorage.setItem('gameState', JSON.stringify(gameState));
        },
        loadState({ commit }) {
            const savedState = localStorage.getItem('gameState');
            if (savedState) {
                const gameState = JSON.parse(savedState);
                commit('setState', gameState);

                if(gameState.isAutoProductionStarted) {
                    setInterval(() => {
                        commit('addValue', gameState.productionAuto); 
                    }, 1000);
                }
            }
        },
    },
    getters: {
        getCookies: state => state.cookies,
        getProductionAuto: state => state.productionAuto,
        getGeneration: state => state.generation,
        getProductionAutoCost: state => state.productionAutoCost,
        getGenerationCost: state => state.generationCost,
    },
});