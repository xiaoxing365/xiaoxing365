<template>
    <div class="projects">
        <h2 id = "name">我的项目</h2>
        <div class="projectsList">
            <div class="project" v-for="project in projectsList">
                <a :href="project.url" target="_blank" style="text-decoration: none;color: gray;">
                    <h3>{{project.name}}</h3>
                    <p>{{project.description}}</p>
                    <p style="text-align: right;">查看更多>></p>
                </a>
            </div>
        </div>
    </div>
</template> 
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Projects',
  data() {
    return {
      projectsList: [
        {
            id:1,
            name: '本仓库',
            description: '我的个人网页',
            url:'https://www.github.com/xiaoxing365/xiaoxing365/',
        },
        {
            id:2,
            name: 'EasyCheck',
            description: '这是一个使用chkdsk的检查工具，用于检查U盘',
            url:'https://www.github.com/xiaoxing365/EasyCheck/',
        },
      ],
      displayLimit:5,
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
.projects{
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