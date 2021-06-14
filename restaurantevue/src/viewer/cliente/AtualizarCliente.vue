<template>
    <div>
        <form-cliente :id="id"></form-cliente>
    </div>
</template>
<script>

import FormCliente from './components/ClienteForm.vue'


export default {
    data(){
        return {
            id: this.$route.params.id,
        }
    },
    components:{
        'form-cliente': FormCliente,
    },}
</script>
<style scoped>

</style>