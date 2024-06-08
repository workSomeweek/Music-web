

<template>
  <el-config-provider :locale="$t(zhCn, en)">
    <ControlSystem></ControlSystem>
  </el-config-provider>
</template>
<script setup lang="ts">
import ControlSystem from "./components/controlSystem.vue";
import {zhCn, en} from "element-plus/es/locale/index.mjs";
import {getCurrentInstance} from "vue";

const $t = getCurrentInstance()?.proxy?.$t;

</script>
<style lang="less" scoped>

</style>
