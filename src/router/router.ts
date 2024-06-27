import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import CommonService from "../common/commonService.ts";

export default class RouterCustom {
  private commonRoutes = [
    {
      path: '/setting',
      children: [
        {
          path: '/setting/menus',
          name: 'Menus',
          component: () => import("../views/menusOperation.vue")
        }
      ]
    }
  ]
  private routes = [
    ...this.commonRoutes
  ] as RouteRecordRaw[];

  getBusinessRoute = () => {
    return CommonService.get("/system/menus/list/get/all", null).then(res => {
      console.log(res);
      return this.init()
    })
  }

  init(){
   return createRouter({
      history: createWebHashHistory(),
      routes: this.routes
    })
  }

}

