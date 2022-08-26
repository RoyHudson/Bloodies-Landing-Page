<template>
  <a-carousel autoplay class="carousel">
    <div v-for="item in images" :key="item">
      <!--      <img :src="require(getImgUrl(item - 1))" alt="carousel_images">-->
      <img class="carousel_images" :src="'http://ec2-34-225-194-157.compute-1.amazonaws.com:8080'+item.url" alt="carousel_images">
    </div>
  </a-carousel>

</template>

<script>
export default ({
  data(){
    return {
      images : []
    }
  },
  mounted() {
    fetch('http://ec2-34-225-194-157.compute-1.amazonaws.com:8080/prueba')
      .then((response) => response.json())
      .then((data) => {
        this.images = data.Carusel
        console.log(this.images)
      })
  },
});
</script>1

<style scoped>
  /* For demo */

  .carousel_images{
    margin: auto;
    width: auto;
    height: 500px;
  }

  .ant-carousel :deep(.slick-dots) {
    position: relative;
    height: 0;
  }

  .carousel{
    margin-top: 75px;
  }
</style>
