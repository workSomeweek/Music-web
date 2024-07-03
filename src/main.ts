import {createApp} from 'vue'
import 'element-plus/dist/index.css'
import "./style.css"
import App from './App.vue'
import CommonUtils from "./common/commonUtils.ts";
import RouterCustom from "./router/router.ts";
import { createPinia, storeToRefs } from 'pinia'
import useMenusStore from "./store/menusStore.ts";

const lang = CommonUtils.getUrlParams("lang") || "zh_CN";
const $t = function (cn: any, en: any) {
  return lang === 'zh_CN' ? cn : en;
}
const app = createApp(App);
app.use(createPinia())
app.config.globalProperties.$t = $t;
const routerCustom = new RouterCustom();
const menus = await routerCustom.getBusinessRoute()
const router = routerCustom.init(menus as any);
const store = useMenusStore();
const routerStore = storeToRefs(store)
routerStore.menus.value = menus as any;
app.use(router);
app.mount('#music_control')
