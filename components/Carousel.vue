<template>
  <a-carousel autoplay arrows="">
    <div v-for="item in 5" :key="item">
<!--      <img :src="require(getImgUrl(item - 1))" alt="carousel images">-->
      <img src="https://www.wonderwall.sg/content/dam/wonderwall/images/2020/06/8-facts-about-blood-donation-that-make-world-blood-donor-day-a-success/Blood%20Donation_lead.jpg" alt="carousel images">
    </div>
  </a-carousel>

</template>

<script>
  import { defineComponent } from 'vue';
  const baseUrl = "./assets/carousel_img/";
  export default defineComponent({
    setup() {
      const getImgUrl = i => {
        return `${baseUrl}image${i + 1}.jpg`;
      };

      return {
        getImgUrl,
      };
    },

  });
</script>

<style scoped>
  /* For demo */
  .ant-carousel :deep(.slick-slide img) {
    padding-top: 65px;
    display: block;
    width: 100%;
  }


  .ant-carousel :deep(.slick-dots) {
    position: relative;
    height: 0;
  }
</style>
