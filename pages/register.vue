<template>

 <a-layout >
    <a-layout-header>
     <Navbar/>
    </a-layout-header>
   
    <a-layout-content class="layoutR" style="padding: 10px 50px">
    
    <div class="backgroundR">
    
    <form>
        <h3><strong>SignUp</strong></h3>

        <label for="name"><strong>Nombre</strong></label>
        <input type="text" placeholder="Ingresa tu nombre" v-model.trim="name" id="name">

        <label for="email"><strong>Email</strong></label>
        <input type="text" placeholder="Ingresa tu email" v-model.trim="email" id="email">

        <label for="password"><strong>Password</strong></label>
        <input type="password" placeholder="Ingresa tu contraseña" v-model.trim="password" id="password"> 
    </form>
    <a-button class="loginR" @click="onLogin()">SignUp</a-button>
    <div class="signup">
      Or
    <n-link to="/login" style="font-size:medium ">Login</n-link>
    </div>
    </div>
    
    
    </a-layout-content>
    
  </a-layout>

</template>


<script>

import { createUserApi } from '../lib/service';

export default {

data(){

return{
name:'',

email: '',

password: '',

};

},

methods: {

onLogin: async function() {

const data = {

Email:this.email,
Password: this.password

};

const result =  await createUserApi(data)

console.log('Respuesta de Strapi ==> ', result)

await this.$router.push('/login');

}

}

};

</script>
<style>

.layoutR{

  height: 600px;
    width: 500px;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
}

.backgroundR{
    padding: 20px;
    top: 55%;
    left: 50%;
    position: absolute;
    height: 600px;
    width: 500px;
    transform: translate(-50%,-50%);
    
}


form *{
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}
form h3{
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}
::placeholder{
    color: #e5e5e5;
}
.loginR{
    margin-top: 32px;
    height: 50px;
    width: 460px;
    background-color: #3fa7e4;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
.signup{
  color: #e5e5e5;
  margin-top: 10px;
  margin-left: 180px;
}

</style>
