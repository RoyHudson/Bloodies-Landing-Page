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
    <Card_image data-aos="fade-up"/>
    <!-- <Objetives/> -->
    <!--<Card/>-->
    <Footer/>
  </div>
  </body>
  <!-- hola xd -->
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


<!--ESTE COMENTARIO TE APARECERA DESPUES DEL GIT PULL - HOLA -->
<!--hola-->
<!--ESTE COMENTARIO TE APARECERA DESPUES DEL GIT PULL - HOLA -->
<!--hola-->
