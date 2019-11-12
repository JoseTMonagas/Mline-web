import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: () =>
        import(/* webpackchunkname: "about" */ './views/AboutUs.vue'),
    },
    {
      path: '/servicios',
      name: 'Servicio',
      component: () =>
        import(/* webpackchunkname: "about" */ './views/Service.vue'),
    },
    {
      path: '/contacto',
      name: 'Contact',
      component: () =>
        import(/* webpackchunkname: "about" */ './views/Contact.vue'),
    },
    {
      path: '/soporte',
      name: 'Support',
      component: () =>
        import(/* webpackchunkname: "about" */ './views/Support.vue'),
    },
  ],
});
