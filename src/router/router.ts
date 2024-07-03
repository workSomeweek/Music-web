import {createRouter, createWebHashHistory} from "vue-router";
import CommonService from "../common/commonService.ts";

export default class RouterCustom {
  private commonRoutes = [
    {
      path: '/setting',
      nameCn: '设置',
      nameEn: "Setting",
      children: [
        {
          path: '/setting/menus',
          name: 'Menus',
          nameCn: "菜单设置",
          nameEn: "MenusSetting",
          component: () => import("../views/menusOperation.vue")
        }
      ]
    }
  ]


  getBusinessRoute = () => {
    return CommonService.get("/system/menus/list/get/all", null).then(res => {
      const {code, data} = res;
      if(+code === 200){
        return [...data, ...this.commonRoutes];
      }
      return [...this.commonRoutes];
    })
  }

  init(list = []) {
    const routes = [...list, ...this.commonRoutes];
    return createRouter({
      history: createWebHashHistory(),
      routes: routes
    })
  }

}

