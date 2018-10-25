// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $axios from '../until/untils'
import store from './vuex/index'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
import { theme } from 'muse-ui'
import { carbon, createTheme } from 'muse-ui-carbon-theme';
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import Loading from 'muse-ui-loading';

Vue.use(Loading)
theme.add('carbon', carbon)
  .addCreateTheme(createTheme)
  .use('carbon')
Vue.config.productionTip = false
Vue.use(Message)
Vue.use(MuseUI);
Vue.prototype.$axios = $axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
