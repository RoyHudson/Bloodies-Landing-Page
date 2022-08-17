<template>
  <div>
      <Navbar/>
      <Card/>
      <Footer/>
  </div>
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
