import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";


const routes = [
  {
    path: '/',
    component: () => import("@/views/homeView.vue"),
  }
] as RouteRecordRaw[];

export default createRouter({
  history: createWebHashHistory(),
  routes
})