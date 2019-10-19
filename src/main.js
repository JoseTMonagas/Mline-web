import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faUserFriends,
  faLaptopCode,
  faPhone,
  faPhoneVolume,
  faQuestionCircle,
  faCopyright,
  faChevronRight,
  faChevronLeft,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import 'bootstrap/dist/css/bootstrap.css';

library.add(
  faHome,
  faUserFriends,
  faLaptopCode,
  faPhone,
  faChevronRight,
  faChevronLeft,
  faPhoneVolume,
  faQuestionCircle,
  faCopyright,
  faEnvelope
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
