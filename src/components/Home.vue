<template>
  <main>
    <h1>小兴365的个人网站</h1>
  </main>
  <div style="background-color: rgba(40,40,40,0.08);">
    <Projects />
    <br/>
    <Article />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Projects from './projects.vue';
import Article from './article.vue';


export default defineComponent({
  name: 'Home',
  components: {
    Projects,
    Article,
  },
});
</script>

<style >
*{
    margin: 0;
    border: 0;
    padding: 0;
}

main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: -20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    text-shadow: 00 4px 20px rgba(0, 0, 0 ,9);
}
</style>
