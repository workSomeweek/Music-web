<template>
  <div class="music_system_container">
    <div class="system_menus_container">
      <el-menu
          default-active="/setting/menus"
          mode="horizontal"
          @select="handleSelect"
      >
        <system-menus :menus="menus"></system-menus>
      </el-menu>
    </div>
    <div class="system_card_container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import SystemMenus from "./systemMenus.vue";
import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import useMenusStore from "@/store/menusStore.ts";
import {cloneDeep} from 'lodash';

const store = storeToRefs(useMenusStore());
const router = useRouter();
const menus = ref(store.menus as Menus.MenusInfo[]);
const defaultActive = ref(null as null | string);

const handleSelect = (path: string) => {
  console.log(path);
}

const initDefaultMenus = () => {
  let defaultRoutes = router.getRoutes()?.[0];
  router.push(defaultRoutes.path);
}

watch(() => store.menus, list => {
  menus.value = cloneDeep(list);
  if(Array.isArray(menus.value)){
    defaultActive.value = menus.value[0]?.path;
  }
}, {immediate: true});

onMounted(() => {
  initDefaultMenus()
})
</script>
<style lang="less" scoped>
.music_system_container {
  width: 100%;
  height: 100%;

  .system_menus_container {
    width: 100%;

    :deep(.el-menu) {
      --el-menu-horizontal-height: 50px;
    }
  }
}
</style>