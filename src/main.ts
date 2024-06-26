import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import "./style.css"
import App from './App.vue'
import CommonUtils from "./common/commonUtils.ts";
import router from "./router/router.ts";
const lang = CommonUtils.getUrlParams("lang") || "zh_CN";
const $t = function (cn:any, en: any){
  return lang === 'zh_CN' ? cn : en;
}
const app = createApp(App);
app.config.globalProperties.$t = $t;
app.use(router);
app.mount('#music_control')
