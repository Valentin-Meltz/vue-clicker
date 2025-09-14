<template>
    <div class="header py-4 px-8 h-1/10">
        <div class="flex justify-center align-middle gap-4">
            <h1 class="header-title text-2xl">My amazing Vue clicker</h1>
            <img class="header-logo" :src="logo" alt="Vue logo">
        </div>
        <div class="navbar">

        </div>
    </div>
</template>

<script>
import logo from '../../assets/vue.svg'

export default {
    name: 'Header',
    data() {
        return {
            logo
        }
    }
}
</script>

<style>
.header-title {
    color : #000;
    font-weight: 640;
    font-family: Helvetica, sans-serif;
    line-height: 22px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;    
}
</style>