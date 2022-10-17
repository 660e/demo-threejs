import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      redirect: '/6f'
    },
    {
      path: '/6f',
      name: '6f',
      component: () => import('@/views/6f.vue')
    }
  ]
});
