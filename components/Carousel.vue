<template>
  <a-carousel autoplay arrows dots-class="slick-dots slick-thumb">
    <template #customPaging="props">
      <a>
        <img :src="getImgUrl(props.i)" />
      </a>
    </template>
    <div v-for="item in 4" :key="item">
      <img :src="getImgUrl(item - 1)" />
    </div>
  </a-carousel>
</template>


<script>
import { defineComponent } from 'vue';
const baseUrl = 'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';
export default defineComponent({
  setup() {
    const getImgUrl = i => {
      return `${baseUrl}abstract0${i + 1}.jpg`;
    };
    return {
      getImgUrl,
    };
  },

});
</script>



<style scoped>
/* For demo */
.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}

.ant-carousel :deep(.slick-slide) {
  height: 260px;
  line-height: 260px;
  background: #000b25;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel :deep(.slick-arrow) {
  display: none !important;
}
.ant-carousel :deep(.slick-thumb) {
  bottom: 0px;
}
.ant-carousel :deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}
.ant-carousel :deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}
.ant-carousel :deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>



<!--ESTE COMENTARIO TE APARECERA DESPUES DEL GIT PULL - HOLA -->
<!--hola-->




<!--<template>-->
<!--  <a-carousel autoplay>-->
<!--    <div>-->
<!--      <img src="https://europeanbloodalliance.eu/world-blood-donor-day-2019-safe-blood-for-all/" alt="image">-->
<!--    </div>-->
<!--    <div><img src="static/image2.png" alt="image"/></div>-->
<!--    <div><img src="static/image3.jpg" alt="image"/></div>-->
<!--    <div><img src="static/image4.png" alt="image"/></div>-->
<!--    <div><img src="static/image5.jpg" alt="image"/></div>-->
<!--  </a-carousel>-->
<!--</template>-->

<!--<style scoped>-->
<!--/* For demo */-->
<!--.ant-carousel :deep(.slick-slide) {-->
<!--  text-align: center;-->
<!--  height: 160px;-->
<!--  line-height: 160px;-->
<!--  background: #364d79;-->
<!--  overflow: hidden;-->
<!--}-->

<!--.ant-carousel :deep(.slick-slide h3) {-->
<!--  color: #fff;-->
<!--}-->
<!--</style>-->
