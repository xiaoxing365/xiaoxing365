<template>
    <footer>
        <p>
            &copy; 2023 小兴365. All rights reserved.
        </p>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>
<style>
*{
    margin: 0;
    border: 0;
    padding: 0;
}
footer {
  background-color: #1a1a1a;
  color: #aaa;
  text-align: center;
  padding: 30px 0;
}
</style>