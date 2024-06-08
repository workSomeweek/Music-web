

<template>
    <div class="music_system_container">
      <div class="system_menus_container">
        <el-menu
            :default-active="Array.isArray(menus) ? menus[0]?.path : null"
            mode="horizontal"
            @select="handleSelect"
        >
          <system-menus :menus="menus"></system-menus>
        </el-menu>
      </div>
      <div class="system_card_container"></div>
    </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import SystemMenus from "./systemMenus.vue";

const menus = ref([] as Menus.MenusInfo[] );

const handleSelect = (path: string) => {
  console.log(path);
}
</script>
<style lang="less" scoped>
.music_system_container{
  width: 100%;
  height: 100%;
  .system_menus_container{
    width: 100%;
    :deep(.el-menu){
      --el-menu-horizontal-height: 50px;
    }
  }
}
</style>