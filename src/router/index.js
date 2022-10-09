import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      redirect: '/test'
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test.vue')
    }
  ]
});
