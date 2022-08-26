<template>

 <a-layout >
    <a-layout-header>
     <Navbar/>
    </a-layout-header>
    
    <a-layout-content class="layoutL" style="padding: 10px 50px">
    <div class="backgroundL">
    
    <form>
        <h3><strong>Login</strong></h3>

        <label for="email"><strong>Email</strong></label>
        <input type="text" placeholder="Email" v-model.trim="email" id="email">

        <label for="password"><strong>Password</strong></label>
        <input type="password" placeholder="Password" v-model.trim="password" id="password"> 
    </form>
    <a-button class="loginL" @click="onLogin()">Log In</a-button>
    <div class="signup">
      Or
    <n-link to="/register" style="font-size:medium ">SignUp</n-link>
    </div>
    

    </div>
    </a-layout-content>
    
    
  </a-layout>

</template>
<script>
import { loginUsersApi } from '../lib/service';
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        onLogin: async function () {
            const data = {
                username: this.email,
                password: this.password
            };
            const result = await loginUsersApi(data);
            console.log("Respuesta de Strapi ==> ", result);
            await this.$router.push('/clientes');
        }
    },
};
</script>
<style>

.layoutL{

  height: 500px;
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

.backgroundL{
    padding: 20px;
    top: 65%;
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
.loginL{
    margin-top: 32px;
   width: 460px;
   height: 40px;
    background-color: #3fa7e4;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
.signupL{
  color: #e5e5e5;
  margin-top: 10px;
  margin-left: 180px;
}

</style>



    





