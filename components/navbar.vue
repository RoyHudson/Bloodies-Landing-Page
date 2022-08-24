<template>
  <a-layout class="navbar">

    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo">
        <n-link to="/">
          <img height="24" width="24" src="../assets/blood-drop-blood-png-clipart-best-28.png" alt="ico" />
          <span>Bloodies</span>
        </n-link>
      </div>
      <a-menu selectedKeys="selectedKeys" theme="light" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="home">
          <n-link to="/"> Home</n-link>
        </a-menu-item>
        <a-menu-item key="2">
          <n-link to="/blog">Blog</n-link>
        </a-menu-item>
        <a-menu-item key="3">Grupo Sanguineo</a-menu-item>
        <a-menu-item key="4">Sobre Nosotros</a-menu-item>
        <a-menu-item key="5">
          <n-link to="/login">Login In</n-link>
        </a-menu-item>
        <a-menu-item key="6">
          <n-link to="/register">Sign Up</n-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['home']),
    };
  },

});
</script>
<style>
.navbar {
  display: flex;
  justify-content: space-between;
}

.logo {
  margin: 0 120px 0 64px;
  float: left;
  display: inline-flex;
  gap: 10px;
  align-items: center;
}

.logo span {
  font-weight: bold;
  color: #141414;
  font-size: 18px;
  position: relative;
  top: -1px;
  margin: 0;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

.ant-menu {
  background-color: #EDF2F4;
}

.ant-layout-header {
  background-color: aliceblue;
  height: 0;
  padding: 0;
}

.ant-menu {
  border: 0;
}
</style>
