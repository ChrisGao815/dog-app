import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import VueRouter from "vue-router";

Vue.prototype.$axios =axios;
Vue.use(VueRouter)

const router = new VueRouter({
    mode:"history",
    base: __dirname,
   routes:[
      {
        path:'/one',
        component:resolve=>{require(['./router/one.vue'],resolve)}
      },
      {
        path:'/two',
        component:resolve=>{require(['./router/two.vue'],resolve)}
      }
   ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
