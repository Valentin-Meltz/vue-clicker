<template>
    <div class="shop-card border-2 border-gray-300 rounded-lg p-4 m-4 flex flex-col justify-between items-center">
        <div class="shop-attribut mb-4">
            <h2 class="font-bold">{{ item }}</h2>
        </div>
        <div class="shop-btn rounded-2xl border-1 border-gray-300 p-1 w-1/2 flex justify-center">
            <button @click="method" class="btn">Buy</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Shop',
  props: {
    item: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    method: {
      type: Function,
      required: false,
      default: () => {}
    }

  }
}
</script>

<style>
.shop-card {
    width: 250px;
    height: 125px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}
.shop-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    border-color: #42b883;
}

.shop-btn{
    font-weight: 600;
    transition: background-color 0.3s, transform 0.2s;
}
.shop-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
</style>