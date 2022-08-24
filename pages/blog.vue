<template>
  <div id="blog">
    <Navbar />
    <section class="content">
      <aside class="sidebar">
        <br>
        <br>
        <a-menu
          class="menu-categorias"
          v-model:selectedKeys="selectedKeys"
          style="width: 256px"
          mode="inline"
          :open-keys="openKeys"
          @openChange="onOpenChange"
        >
          <a-sub-menu key="sub1">
            <template #title>Categorias</template>
              <a-menu-item key="1">Noticias</a-menu-item>
              <a-menu-item key="2">Testimonios</a-menu-item>
              <a-menu-item key="3">Actividades</a-menu-item>
              <a-menu-item key="4">Equipo Bloodiest</a-menu-item>
              <a-menu-item key="5">#</a-menu-item>
              <a-menu-item key="6">#</a-menu-item>
              <a-menu-item key="7">#</a-menu-item>
              <a-menu-item key="8">#</a-menu-item>
              <a-menu-item key="9">#</a-menu-item>
              <a-menu-item key="10">#</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>Archivo</template>
            <a-menu-item key="11">2022</a-menu-item>
            <a-menu-item key="12">#</a-menu-item>
            <a-menu-item key="13">#</a-menu-item>
            <a-menu-item key="14">#</a-menu-item>
            <a-menu-item key="15">#</a-menu-item>
            <a-menu-item key="16">#</a-menu-item>
            <a-menu-item key="17">#</a-menu-item>
            <a-menu-item key="18">#</a-menu-item>
            <a-menu-item key="19">#</a-menu-item>
            <a-menu-item key="20">#</a-menu-item>
          </a-sub-menu>
        </a-menu>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </aside>
      <div class="articles">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </section>
    <Footer />
  </div>
</template>


<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { TwitterOutlined, YoutubeOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
  },

  setup() {
    const state = reactive({
      rootSubmenuKeys: ['sub1', 'sub2'],
      openKeys: ['sub1', 'sub2'],
      selectedKeys: [],
    });

    const onOpenChange = openKeys => {
      const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);

      if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };

    return { ...toRefs(state),
      onOpenChange,
    };
  },

});

</script>


<style>

  *{
    box-sizing: border-box;
  }

  .content::after{
    display: table;
    clear: both;
  }

  .sidebar{
    float: left;
    width: 30%;
  }

  footer{
    float: bottom;

  }


  .articles{
    margin: 0;
    border-left: 0;
    padding: 0;
    float: right;
    width: 70%;
  }

</style>
