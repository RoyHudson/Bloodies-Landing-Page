<template>
    <a-layout class="header">
        <div class="content">
            <div class="text">
                <h1>Contacta con personas dispuesta ayudar</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum veritatis error a optio nesciunt
                    ullam eligendi molestias eveniet. Perspiciatis quia tenetur cumque, aut impedit quidem perferendis
                    velit minus eos.</p>
                <a-button class="hyper"><m-link to="login.vue">Conoce a quienes puedes ayudar →</m-link></a-button>
            </div>
            <div class="banner"  data-aos="fade-up">
                <img src="../assets/donator_list.svg" alt="banner" />
            </div>
        </div>
    </a-layout>
</template>}

<style>
.header {
    padding: 32px;
    height: 100vh;
    width: 100%;
    background-color: aliceblue;
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
    max-width: 50%;
    width: 100%;
}

.text {
    max-width: 50%;
    width: 100%;
}

.banner img {
    width: 100%;
}
</style>