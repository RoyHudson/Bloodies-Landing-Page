<template>
<div style="padding-bottom: 70px">
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">Home</a-menu-item>
        <a-menu-item key="2">Blog</a-menu-item>
        <a-menu-item key="3">Grupo Sanguineo</a-menu-item>
        <a-menu-item key="4">Sobre Nosotros</a-menu-item>
        <a-menu-item key="5">Login/Sign</a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
</div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['2']),
    };
  },

});
</script>
<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
