<template>
    <div>
        <div class="card" style="width: 18rem;">
            
            <img v-if="imagem" class="card-img-top" :src="imagem">
            <img v-else class="card-img-top" src="../../assets/logo.png">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props: ['imagem'],

}
</script>
