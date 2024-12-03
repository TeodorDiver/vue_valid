/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import MyForm from '../components/MyForm.vue';
import Greeting from '../components/Greeting.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MyForm',
      component: MyForm,
    },
    {
      path: '/greeting/:name',
      name: 'Greeting',
      component: Greeting,
      props: true,
    },
    {
      path: '*', 
      name: 'NotFound',
      component: {
        template: `
          <div style="text-align: center; margin-top: 50px;">
            <h1>404 - Страница не найдена</h1>
            <p>Извините, но запрашиваемая вами страница не существует.</p>
            <router-link to="/">Вернуться на главную страницу</router-link>
          </div>
        `,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === 'Greeting') {
    const validName = 'Сергей';
    const validEmail = 'satarov@mail.com';
    const storedData = JSON.parse(localStorage.getItem('formData'));

    if (storedData && storedData.name === validName && storedData.email === validEmail) {
      next(); 
    } else {
      next({ name: 'MyForm' }); 
    }
  } else {
    next(); 
  }
});

export default router;