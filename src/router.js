import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContact from './pages/AppContact.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        // Se c'è una posizione salvata (ad esempio quando si preme il pulsante indietro), scorrere a quella posizione
        if (savedPosition) {
          return savedPosition
        } else {
          // Altrimenti, scorri fino in cima
          return { top: 0 }
        }
      }
});

export { router };