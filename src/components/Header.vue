<template>
  <header>
      <ul>
        <li><img src="../assets/imgs/home.png" alt="head"></li>
        <li>
          <div><router-link to="/">首页</router-link></div>
        </li>
        <li>
          <div><router-link to="/about">关于</router-link></div>
        </li>
      </ul>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>
<style>
*{
    margin: 0;
    border: 0;
    padding: 0;
}
a{
  color: white;
}
header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: transparent;
  color: white;
  padding: 10px 0;
  border-radius: 50px;
}
header ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

}
header li{
  flex: 1;
  text-align: center;
}
</style>