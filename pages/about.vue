
<template>
    <div id="Sobre Nosotros" style="padding-top:30%">
    <Navbar />
    <a-layout class="texto">
        <div class="content">
        <div class="banner">
            <div class="text">
                <h1 class="TextSub">Sobre Nosotros</h1>
                <br>
                <br>
                <p>Somos los estudiantes de la Universidad Interamericana de Panamá, de la facultad de Arquitectura, Diseño y Ingenería</p>
                <p>Cursando el grupo de Programación Grafica con el facilitador Mayron Torres del QII del 2022</p>
                <p>Presente proyecto es realizado por el grupo del presente curso y el proyecto es organizado y desarollado utilizando diferentes tecnologias.</p>


            </div>

            </div>
            </div>
        </a-layout>
    
    </div>


</template>

<script>

import Navbar from '../components/navbar.vue';
export default {
    name: 'nosotros',
    components:{ Navbar },
    texto() {
        return {}

    }
   
}

</script>


<style scoped>

.text h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    margin: 0 0 30px 0;
    padding: 0;
    color: rgb(95, 63, 63);
    text-align: center;
}
.text p{
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 25px;
    max-width: 50%;
    width: 100%;
    text-align: center;
}



</style>