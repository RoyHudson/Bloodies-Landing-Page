<template>
    <a-layout class="start">
      <h1 class="TextSub">Newsteller</h1>
        <img class="start-img" src="../assets/newspaper-news-svgrepo-com.svg" alt="gift" />
        <p  class="newstellertext">Si quieres obtener mas informacion puedes Suscribirte a nuestro Newsteller</p>
        <div class="form-group">
            <input class="form-field" type="email" placeholder="Email">
        </div>
        <a-button class="email" data-aos="fade-up" type="primary">Enviar</a-button>
    </a-layout>
</template>

<style>
    .start {
        background-color: #EDF2F4;
        height: 100vh;
        padding-top: 64px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    
.start-description {
        margin: 32px;
    text-align: center;
}

.start-img {
        height: 350px;
    margin: 32px;
}

:root {
  --input-color: #000;
  --input-border: #bfc8ad;
  --input-background: #fff;
  --input-placeholder: #CBD1DC;
  --input-border-focus: #2B2D42;
  --group-color: var(--input-color);
  --group-border: var(--input-border);
  --group-background: #bfc8ad;
  --group-color-focus: #fff;
  --group-border-focus: var(--input-border-focus);
  --group-background-focus: #2B2D42;
}

.form-field {
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: var(--input-color);
  border: 1px solid var(--input-border);
  background: var(--input-background);
  transition: border 0.3s ease;
}
.form-field::-moz-placeholder {
  color: var(--input-placeholder);
}
.form-field:-ms-input-placeholder {
  color: var(--input-placeholder);
}
.form-field::placeholder {
  color: var(--input-placeholder);
}
.form-field:focus {
  outline: none;
  border-color: var(--input-border-focus);
}

.form-group {
  position: relative;
  display: flex;
  width: 100%;
}
.form-group > span,
.form-group .form-field {
  white-space: nowrap;
  display: block;
}
.form-group > span:not(:first-child):not(:last-child),
.form-group .form-field:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.form-group > span:first-child,
.form-group .form-field:first-child {
  border-radius: 6px 6px 6px 6px;
}
.form-group > span:last-child,
.form-group .form-field:last-child {
  border-radius: 6px 6px 6px 6px;
}
.form-group > span:not(:first-child),
.form-group .form-field:not(:first-child) {
  margin-left: -1px;
}
.form-group .form-field {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  width: 1%;
  margin-top: 0;
  margin-bottom: 0;
}
.form-group > span {
  text-align: center;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 25px;
  color: var(--group-color);
  background: var(--group-background);
  border: 1px solid var(--group-border);
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
}
.form-group:focus-within > span {
  color: var(--group-color-focus);
  background: var(--group-background-focus);
  border-color: var(--group-border-focus);
}

.email{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
.newstellertext{
    z-index: 100px;
    padding-left: 30%;
    padding-right: 30%;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 18px;
}

* {
  box-sizing: inherit;
}
*:before, *:after {
  box-sizing: inherit;
}

.email{
  width: 200px;
  background: #EE5655;
  border-color: #EE5655;
  font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 17px;
  
}
.form-group {
  max-width: 360px;
}
.form-group:not(:last-child) {
  margin-bottom: 32px;
}

</style>