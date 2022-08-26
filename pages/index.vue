<template>
<body id="index">
  <div>
    <Navbar/>
    <Carousel data-aos="fade-up"/>
    <Header data-aos="fade-up"/>
    <Content data-aos="fade-up"/>
    <Donator  data-aos="fade-up"/>
    <Award data-aos="fade-up"/>
    <StartNow/>
    <Status/>
    <!-- <Objetives/> -->
    <!--<Card/>-->
    <Footer/>
  </div>
  </body>
</template>
<script>
import Navbar from '../components/navbar.vue';
import Header from '../components/header.vue'
import Card from '../components/card.vue';
import Footer from '../components/footer.vue';
import Objetives from '../components/objetives.vue';
import Card_image from '../components/card_image.vue';
import content from '../components/content.vue';
import Donator from '../components/donator.vue';
import Award from '../components/award.vue';
import StartNow from '../components/startNow.vue';
import Status from '../components/status.vue';

export default {
    name: "IndexPage",
    components: { Header, Navbar, content, Card, Footer, Objetives, Card_image, Donator, Award, StartNow, Status }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

</style>