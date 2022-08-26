<template>
    <a-layout class="content-info">
        <div class="text-info">
            <h1 class="TextSub">Proximamente</h1>
            <div>
              <img class="status-img" src="../assets/circular-clock-watch-svgrepo-com.svg" alt="gift" />
              <p style="padding-top: 50px; font-weight:300">
                Suscribete a nuestro Newsteller para obtener mas informacion acerca del proyecto Bloodies
              </p>
            </div>
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
      deadline: Date.now () + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      onFinish,
    };
  },

});
</script>
<style scoped>
.content-info {
    background-color: white;
}

.text-info {
    text-align: center;
}

.status-img {
    height: 350px;
    padding: auto;
    position: relative;
}
.timer{
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  padding-top: 50px;
}

</style>