<template>
  <template v-for="menu in menus" :key="menu.path">
    <el-menu-item v-if="!menu.children || menu.children.length === 0" :index="menu.path">
      {{ $t(menu.nameCn, menu.nameEn) }}
    </el-menu-item>
    <el-sub-menu v-else :index="menu.path">
      <template #title>{{ $t(menu.nameCn, menu.nameEn) }}</template>
      <system-menus :menus="menu.children"></system-menus>
    </el-sub-menu>
  </template>
</template>
<script setup lang="ts">
import {getCurrentInstance} from "vue";

const props = defineProps({
  menus: {
    default: [] as Menus.MenusInfo[],
    type: Array<Menus.MenusInfo>
  }
})
const $t = getCurrentInstance()?.proxy?.$t;
</script>
<style scoped lang="less">

</style>