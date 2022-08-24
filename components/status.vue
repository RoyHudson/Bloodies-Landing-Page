<template>
    <a-layout class="content-info">
        <div class="text-info">
            <h1>Estado del Proyecto</h1>
            <a-row :gutter="16">
                <a-col :span="24" style="margin-top: 32px">
                    <a-statistic-countdown class=" " title="Dias Faltantes" :value="deadline" format="D H M S" />
                </a-col>
            </a-row>
        </div>
    </a-layout>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onFinish = () => {
      console.log('finished!');
    };

    return {
      deadline: Date.now() + 10000 * 60 * 60 * 24 * 2 + 1000 * 30,
      onFinish,
    };
  },

});
</script>
<style>
.content-info {
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: white;
    padding: 0px;
    overflow: hidden;
    z-index: 0;
}

.text-info {
    margin: auto;
}

.content-info img {
    position: absolute;
    z-index: 10;
    width: 500px;
}

.img-right {
    right: -100px;
    top: -38%;
}

.img-left {
    left: -100px;
    bottom: -38%;
}
</style>