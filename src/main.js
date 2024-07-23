import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import ability from './plugins/ability'
import alert from './plugins/alert'
import attributes from './plugins/attributes'
import apiErrorHandler from './plugins/apiErrorHandler'
import VueNumber from 'vue-number-animation'

import LoadingAnimation from '@/components/LoadingAnimation'
import LoadingCss from '@/components/LoadingCss'
import PopupVue from '@/components/PopupVue'
import PopupFull from '@/components/PopupFull'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import JsonCSV from 'vue-json-csv';
import PopupNew from '@/components/PopupNew'
import { Icon } from '@iconify/vue';
import VueApexCharts from "vue3-apexcharts";
import PolarisVue from '@ownego/polaris-vue'

// import styling and tailwind
import '@ownego/polaris-vue/dist/style.css'
import '@/assets/style.css'
import '@/assets/css/main.css'

export default createApp(App)

  // Registering plugins
  .use(router)
  .use(store)
  .use(vuetify)
  .use(ability)
  .use(alert)
  .use(attributes)
  .use(apiErrorHandler)
  .use(VueNumber)
  .use(VueApexCharts)
  .use(PolarisVue) 

  // Registering Global Components
  .component('LoadingAnimation', LoadingAnimation)
  .component('Loading', LoadingCss)
  .component('Popup', PopupVue)
  .component('PopupFull', PopupFull)
  .component('VueDatePicker', VueDatePicker)
  .component('downloadCsv', JsonCSV)
  .component('popupNew', PopupNew)
  .component('icon', Icon)

  .mount('#app')
