<template>
    <div>
        <Navbar/>
        <br>
        <Error403/>
    </div>
</template>
<script>
    import Navbar from '../components/navbar.vue';
import Error403 from '../components/error403.vue';
    export default {
    name: "IndexPage",
    components: { Navbar, Error403 }
}
</script>