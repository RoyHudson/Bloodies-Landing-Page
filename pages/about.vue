<template>
  <body id="Sobre Nosotros">
    <Navbar/>
    <main class="texto">
        <div class="py-5">
            <div class="row">
                <h1 class="main-heading"><u>Sobre Nosotros</u></h1>
            
                <p><center>Somos los estudiantes de la Universidad Interamericana de Panamá, de la facultad de Arquitectura, Diseño y Ingenería</center></p>
                <p><center>Cursando el grupo de Programación Grafica con el facilitador Mayron Torres del QII del 2022</center></p>
                <p><center>Presente proyecto es realizado por el grupo del presente curso y el proyecto es organizado y desarollado utilizando diferentes tecnologias.</center></p>
            </div>
        </div>
        


    </main>
    </body>
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

<style>
.texto h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 550;
    margin: 0 0 30px 0;
    padding: 0;
    color: rgb(95, 63, 63);
    text-align: center;
}
.texto p{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    margin: 2 6 30px 0;
    padding: 0;
    color: rgb(0, 0, 0);
    text-align: center;

}

</style>