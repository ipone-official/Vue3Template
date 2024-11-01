import { createApp } from 'vue';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import App from './App.vue';
import router from './router';
import { setupComponents } from './config/setup-components';
import vuetify from './plugins/vuetify'; // Import Vuetify instance
import '@mdi/font/css/materialdesignicons.css';
  
const app = createApp(App);

app.use(router);
app.use(vuetify);
setupComponents(app);

app.mount('#app');
