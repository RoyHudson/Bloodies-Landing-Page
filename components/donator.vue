<template>
    <a-layout class="header">
        <div class="content">
            <div class="textdonator">
                <h1 class="titledonator">Conecta con personas dispuestas ayudar</h1>
                <p>Mediante nuestro ChatBot podras solicitar una donacion de sangre, luego nuestras entidades afilidas se pondran en contacto con usted.</p>
                <a-button class="awardbuttom"><m-link to="login.vue">Whats App</m-link></a-button>
            </div>
            <div class="banner"  data-aos="fade-up">
                <img src="../assets/blood-transfusion-surgery-svgrepo-com.svg" alt="banner" />
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

.textdonator {
    max-width: 50%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 25px;
}
.titledonator{
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    font-size: 3pc;
}

.banner img {
    width: 100%;
}
.awardbuttom{
    width: 200px;
     background-color: #128C7E;
     border-color: #25D366;
     color: white;
}
</style>