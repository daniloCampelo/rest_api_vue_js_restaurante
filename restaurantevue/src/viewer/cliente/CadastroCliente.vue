<template>
    <div>
        <cadastrar-cliente></cadastrar-cliente>
    </div>
    
</template>
<script>

import FormCliente from './components/ClienteForm.vue'

export default {
    data(){
        return {

        }
    },
    components:{
        'cadastrar-cliente': FormCliente,
    }
}
</script>
<style scoped>

</style>