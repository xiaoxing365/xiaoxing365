import { createRouter, createWebHashHistory } from 'vue-router';
import Header from '../components/Header.vue';
import Home from '../components/Home.vue';
import Article from '../components/article.vue';
import Projects from '../components/projects.vue';
import About from '../components/about.vue';
import Footer from '../components/Footer.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/header',
      component: Header
    },
    {
      path: '/article',
      component: Article
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/footer',
      component: Footer
    }
  ]
});

export default router;