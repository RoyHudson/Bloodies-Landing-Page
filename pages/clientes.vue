<template>
 <a-layout >
<a-layout-header>
     <Navbar/>
</a-layout-header>
 <a-layout-content class="mantenimiento">
		<h1>Página web en construcción</h1>
		<h3>Lo sentimos, la pagina a la que acabas de ingresar aun esta en mantenimiento, de parte de Bloodies te pedimos unas disculpas.</h3>
</a-layout-content>
</a-layout>
</template>

<script>
export default {

}
</script>

<style>
		/*PERSONALIZACIÓN DE P.MANTENIMIENTO*/
		.mantenimiento{
         background: #a73737;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #7a2828, #a73737);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #7a2828, #a73737); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

			width:700px;
			height:250px;
			padding:32px;
			border:1px solid #000;
			border-radius:10px;
			margin-top:-200px;
			margin-left:-300px;
            position:fixed;
			top:50%;
			left:50%;
		}
		.mantenimiento h1, .mantenimiento h3{
			font-family:"noto sans", sans-serif;
            color: aliceblue;
		}

		.mantenimiento h1{
			font-size:3em;
			text-align:center;
			padding:16px;
		}
		.mantenimiento h2{
			font-size:2em;
			font-style:italic;
		}
		.mantenimiento p{
			margin:16px 0;
			line-height:1.5em;
		}
</style>