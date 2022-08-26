<template>
    <a-layout class="award">
        <h1 class="TextSub">¿Quieres Conocer a que tipo de Sangre puedes Donar?</h1>
        <img class="img" src="../assets/blood_types-removebg.png" alt="gift" />
        <a-button class="hyper">
            <n-link to="/blog">Ver mas</n-link>
        </a-button>
    </a-layout>
</template>

<style>
    .award {
        background-color: white;
        height: 100vh;
        padding-top: 64px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    
.award-description {
        margin: 32px;
    text-align: center;
}

.img{
    width: 50%;
    margin: 0;
}

.hyper{
    width: 30%;
    max-height: 40px;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter,sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.hyper:hover {
  box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
}

</style>