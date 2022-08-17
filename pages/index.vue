<template>
<body id="index">
  <div>
      <Navbar/>
      <Carousel/>
      <!-- <Card_image/> -->
      <!-- <Objetives/> -->
      <Card/>
      <Footer/>
  </div>
  </body>
  <!-- hola xd -->
</template>
<script>
import Navbar from '../components/navbar.vue';
import Card from '../components/card.vue';
import Footer from '../components/footer.vue';
import Objetives from '../components/objetives.vue';
import Card_image from '../components/card_image.vue';
export default {
    name: "IndexPage",
    components: { Navbar, Card, Footer, Objetives, Card_image }
}
</script>


