<template>
<body>
    
  <main class="box">
    <h2>Login</h2>
    <form>
        <div class="inputBox">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" placeholder="test@gmail.com" required/>
        </div>
        <div class="inputBox">
            <label for="userPassword">Contraseña</label>
            <input type="password" name="userPassword" id="userPassword" placeholder="Escribe tu contraseña"
                   required/>
        </div>
        <div>
            <button type="submit" name="" style="float: none;">Login</button>
            <nuxt-link to="/register">
            <a class="button" href="" style="float: none;">Sign up</a>
            </nuxt-link>
        </div>
    </form>
</main>

</body>
</template>


<script>
export default {
    data(){
        return{
            email:'',
            password:'',
        }
    }

}
</script>

<style>
body {
    background: #DA4453;  
    background: -webkit-linear-gradient(to right, #89216B, #DA4453);  
    background: linear-gradient(to right, #89216B, #DA4453); 

}
.box {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
    margin: auto auto;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.box h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 550;
    margin: 0 0 30px 0;
    padding: 0;
    color: #fff;
    text-align: center;
}

.box .inputBox label {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 550;
    color: #fff;
}

.box .inputBox input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
    margin-bottom: 30px;
    outline: none;
    padding: 10px 0;
    width: 100%;
}

.box input[type="submit"], .box button[type="submit"], a.button {
    font-family: Arial, Helvetica, sans-serif;
    background: #03a9f4;
    font-size: 11px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    padding: 15px 81.3px;
    letter-spacing: 2px;
    outline: none;
    text-transform: uppercase;
    text-decoration: none;
    margin: 5px 5px 5px 5px;
    display: inline-block;
}

.box input[type="submit"]:hover, .box button[type="submit"]:hover, a.button:hover {
    opacity: 0.8;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>