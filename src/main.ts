import Vue from 'vue';
import Buefy from 'buefy';
import Fragment from 'vue-fragment';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(Buefy);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
