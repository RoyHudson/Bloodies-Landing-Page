<template>
    <a-layout class="content-info">
        <img src="../assets/grid.png" alt="grid" class="img-left">
                <img src="../assets/grid.png" alt="grid" class="img-right">
        <div class="text-info">
            <h1>Haz una buena acción</h1>

            <p>Donar sangre es el regalo más valioso que podemos hacerle a alguien. La decisión de donar sangre puede salvar una vida o 
                incluso varias si la sangre es separada por sus componentes: glóbulos rojos, plaquetas y plasma, ya que pueden utilizarse 
                individualmente para pacientes con enfermedades específicas.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus architecto deleniti assumenda ipsam
                ipsa sed rerum necessitatibus ipsum similique corrupti impedit tempore quisquam voluptatum debitis, quia
                distinctio iure voluptatem fugiat.</p>
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
    z-index: 100;
    margin: auto;
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