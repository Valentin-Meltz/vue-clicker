<template>
    <div class="main-container px-4 h-9/10">
        <div class="text-xl flex justify-around items-center p-4 h-1/10">
            <span class="font-normal">{{ productionAuto }} by seconde</span>
            <span class="font-normal">{{ generation }} by click</span>
        </div>
        <div class="flex justify-around items-center p-4 w-full h-6/10">
            <div class="title-text">
                <h2 class="text-3xl font-bold">Welcom to my Vue Clicker</h2>
                <h1 class="text-8xl font-semibold">Vue Clicker</h1>
                <div class="text-xl">
                    <span class="font-normal">Click to update your score : </span>
                    <span class="font-semibold">{{ cookies }}</span>
                </div>
            </div>
            <div>
                <button @click="increment">
                    <img class="logo vue" :src="logo" alt="Vue Logo">
                </button>
            </div>
        </div>
        <div class="shop-container flex justify-around items-center w-full h-3/10">
            <Shop item="Production Automatique" cost="150" :method="() => { if(cookies > productionAutoCost) startAutoProduction() }"/>
            <Shop item="Génération x2" :cost="generationCost" :method="() => { if (cookies > generationCost) updateGeneration() }"/>
            <Shop item="Production Automatique x2" :cost="productionAutoCost" :method="() => { if (cookies > generationCost) updateProductionAuto() }"/>
        </div>
    </div>
</template>

<script>
import logo from '../../assets/vue.svg'
import Shop from './shop.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'


export default {
    name: 'Clicker',
    data() {
        return {
            logo,
        }
    },
    computed: {
        ...mapGetters({
          cookies: 'getCookies',
          productionAuto: 'getProductionAuto',
          generation: 'getGeneration',
          productionAutoCost: 'getProductionAutoCost',
          generationCost: 'getGenerationCost',
        })
    },
    methods: {
        ...mapMutations({
            increment: 'increment',
            updateGeneration: 'updateGeneration',
            updateProductionAuto: 'updateProductionAuto',
        }),
        ...mapActions({
            startAutoProduction: 'startAutoProduction',
        })
    },
    components: {
        Shop,
    }
}
</script>

<style scoped>
.logo {
  height: 15em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.title-text h2{
    color: #41B883;
}
.title-text span{
    color: #808080;
}
</style>