<template>
  <div>
      <Navbar/>
      <Carousel/>
      <Card/>
      <Footer/>
  </div>
  <!-- hola xd -->
</template>
<script>
import Navbar from '../components/navbar.vue';
import Card from '../components/card.vue';
import Footer from '../components/footer.vue';
export default {
    name: "IndexPage",
    components: { Navbar, Card, Footer }
}
</script>
