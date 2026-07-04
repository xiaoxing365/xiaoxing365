<template>
  <div>
    <img class="top-img" src="@/assets/imgs/topimg.jpg" alt="top_img">
  </div>
  <main>
    <h1>小兴365的个人网站</h1>
    
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style >
*{
    margin: 0;
    border: 0;
    padding: 0;
}
template {
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
}
.top-img{
    height: 100vh;
    border-radius: 30px;
    object-fit: cover;
    display: block;
}
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    text-shadow: 00 4px 20px rgba(0, 0, 0 ,9);
}
</style>
