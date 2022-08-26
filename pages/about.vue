
<template>
    <div>
        <Navbar/>
    <a-layout class="content-info">
        <div class="banner">
            <img src="../assets/about.svg" alt="banner"/>
        </div>
        <div class="content">
            <div class="text-info">
            <h1 class="TextSub">Sobre Nosotros</h1>
                <p>Somos los estudiantes de la Universidad Interamericana de Panamá, de la facultad de Arquitectura, Diseño y Ingenería. 
                    Cursando el grupo de Programación Grafica con el facilitador Mayron Torres del QII del 2022, Presente proyecto es realizado por el grupo del presente curso 
                    y el proyecto es organizado y desarollado utilizando diferentes tecnologias.</p>
                <!-- <p>Cursando el grupo de Programación Grafica con el facilitador Mayron Torres del QII del 2022</p> -->
                <!-- <p>Presente proyecto es realizado por el grupo del presente curso y el proyecto es organizado y desarollado utilizando diferentes tecnologias.</p> -->
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

.header {
    padding: 32px;
    height: 100vh;
    width: 100%;
    background-color: #EDF2F4;
}
.content {
        display: inline-flex;
        margin: auto;
        max-width: 1200px;
        width: 100%;
        gap: 50px;
        padding-top: 64px;
}

.banner {
    max-width: 30%;
    width: 100%;
    padding-bottom: 300px;
    padding-left: 33%;
}
.content-info {
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: white;
    padding: 64px;
    overflow: hidden;
}

.text-info {
    z-index: 100px;
    padding-left: 0%;
    padding-right: 0%;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 25px;
}
.TextSub{
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    font-size: 3pc;
}

.content-info img {
    position: absolute;
    z-index: 10;
    width: 500px;
}


</style>