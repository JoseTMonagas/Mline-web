import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMeta from 'vue-meta';
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
  faCode,
  faBars,
  faTerminal,
  faNetworkWired,
  faDesktop,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

library.add(
  faHome,
  faTerminal,
  faCode,
  faBars,
  faDesktop,
  faNetworkWired,
  faUserFriends,
  faLaptopCode,
  faPhone,
  faChevronRight,
  faChevronLeft,
  faPhoneVolume,
  faQuestionCircle,
  faCopyright,
  faEnvelope,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})
