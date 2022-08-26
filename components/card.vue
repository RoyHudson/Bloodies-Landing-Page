<template>
  <div
    :style="{
      height: '200px',
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid #ebedf0',
      borderRadius: '2px',
      padding: '48px',
      textAlign: 'center',
      background: '#fafafa',
      width: '100%',
    }"
  >
    Render in this
    <div style="margin-top: 16px">
      <a-button type="primary" @click="showDrawer">Open</a-button>
    </div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :get-container="false"
      :style="{ position: 'absolute' }"
      @close="onClose"
    >
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref(false);

    const afterVisibleChange = bool => {
      console.log('visible', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };

    return {
      visible,
      afterVisibleChange,
      showDrawer,
      onClose,
    };
  },

});
</script>
<!--ESTE COMENTARIO TE APARECERA DESPUES DEL GIT PULL - HOLA -->
<!--hola-->
<!--ESTE COMENTARIO TE APARECERA DESPUES DEL GIT PULL - HOLA -->
<!--hola-->
<!--ESTE COMENTARIO TE APARECERA DESPUES DEL GIT PULL - HOLA -->
<!--hola-->
<!--ESTE COMENTARIO TE APARECERA DESPUES DEL GIT PULL - HOLA -->
<!--hola-->
