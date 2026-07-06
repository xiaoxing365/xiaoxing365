<template>
    <div class="articles">
        <h2 id = "name">我的文章</h2>
        <div class="articlesList">
            <div class="article" v-for="article in articlesList">
                <a :href="article.url" target="_blank" style="text-decoration: none;color: gray;">
                    <h3>{{article.name}}</h3>
                    <p>{{article.description}}</p>
                    <p style="text-align: right;">查看更多>></p>
                </a>
            </div>
        </div>
    </div>
</template> 
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Articles',
  data() {
    return {
      articlesList: [
        {
          id:1,
          name: 'mem reduct 没有托盘图标',
          description: '有关mem reduct的教程',
          url:'https://www.cnblogs.com/xiaoxing365/p/19121956',
        },
        {
          id:2,
          name: 'Visual Assistant 在VS2017的安装',
          description: '有关Visual Assistant的教程',
          url:'https://www.cnblogs.com/xiaoxing365/p/18868737',
        },
      ],
      displayLimit:5
    }
  },
  computed: {
    filteredProjects() {
      return this.projectsList.slice(0, this.displayLimit);
    }
  }
});
</script>
<style>
.articles{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 12px;
    background-color: rgba(255,255,255,0.1);
    border: 2px solid rgba(128,128,128,0.4);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 20px;
    max-height: 500px;
    overflow-y: auto;
    width: fit-content;
    margin: 0 auto;
    padding-top: 5px;
}
#name{
    margin: 20px;
}
</style>