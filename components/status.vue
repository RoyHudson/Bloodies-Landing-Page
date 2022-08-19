<template>
    <a-layout class="content-info">
        <img src="../assets/grid.png" alt="grid" class="img-left">
                <img src="../assets/grid.png" alt="grid" class="img-right">
        <div class="text-info">
            <h1>Estado del proyecto</h1>

            <h2>Actualmente esta en una fase muy temprana 🟡</h2>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus architecto deleniti assumenda ipsam
                ipsa sed rerum necessitatibus ipsum similique corrupti impedit tempore quisquam voluptatum debitis, quia
                distinctio iure voluptatem fugiat.</p>

                <img data-aos="fade-up" src="../assets/in_process.svg"/>
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
    z-index: 0;
}

.text-info {
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