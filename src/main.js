import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import axios from 'axios'
window.axios= axios;


import { 
        Input,
        Checkbox,
        Select,
        Avatar,
        Table,
        Card,
        Menu,
        List,
         Drawer,
         Button,
        message } from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas , fab,far);
import './static/style.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
const app=createApp(App);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
app.use(Button);
app.use(Drawer);
app.use(Input);
app.use(Checkbox);
app.use(Menu);
app.use(Avatar);
app.use(Select);
app.use(Table);
app.use(Card);
app.use(List);
app.config.globalProperties.$message = message;