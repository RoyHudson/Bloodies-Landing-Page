<template>
    <a-layout class="content-info">
        <img src="../assets/grid.png" alt="grid" class="img-left">
                <img src="../assets/grid.png" alt="grid" class="img-right">
        <div class="text-info">
            <h1 class="TextSub">Misión</h1>

            <p>Somos especializado en ofrecer servicios de salud, docencia e investigación para la población 
                demandante utilizando tecnología avanzada con compromiso social.</p>
            <h1 class="TextSub">Visión</h1>

            <p>Ser capaz de concientizar eficientemente sobre las necesidades de toda persona cuya 
                vida o salud depende de la transfusión, esto sin retribución alguna, recolectando continuamente 
                la sangre mediante la donación a través de la aplicación. </p>
        </div>
    </a-layout>
</template>

<style>


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
    padding-left: 30%;
    padding-right: 30%;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
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

.img-right {
    right: -100px;
    top: -38%;
}

.img-left {
    left: -100px;
    bottom: -38%;
}
</style>