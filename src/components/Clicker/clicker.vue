<template>
    <div class="main-container px-4 h-9/10">
        <div class="flex justify-around items-center p-4 w-full h-2/3">
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
        <div class="shop-container flex justify-around items-center w-full h-1/3">
            <Shop item="Production Automatique" imageSrc="" :method="() => { if(cookies > 150) startAutoProduction() }"/>
            <Shop item="Génération x2" imageSrc="" :method="() => { if (cookies > 50) updateGeneration() }"/>
            <Shop item="Item 3" imageSrc="" />
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
          cookies: 'getCookies'
        })
    },
    methods: {
        ...mapMutations({
            increment: 'increment',
            updateGeneration: 'updateGeneration',
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