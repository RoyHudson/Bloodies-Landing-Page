<template>
    <a-layout class="award">
        <h1>Grupo Sanguineo</h1>
        <img class="img" src="../assets/blood_types.jpg" alt="gift" />
        <a-button class="hyper"><m-link to="login.vue">Conoce a quienes puedes ayudar →</m-link></a-button>
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
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      onFinish,
    };
  },

});
</script>

<style>
    .award {
        background-color: white;
        height: 100vh;
        padding-top: 64px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    
.award-description {
        margin: 32px;
    text-align: center;
}

.img{
    width: 50%;
}
.hyper{
     border: white;
}
</style>