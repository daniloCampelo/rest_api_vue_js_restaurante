<template>
    <div class="card" style="width: 18rem;">
        <imagem-cliente :imagem="cliente.imagem" />
        <div class="card-body">
            <h5 class="card-title">{{ cliente.nome }}</h5>
            <p class="card-text">{{ cliente.email }}</p>
            <div>
                <router-link :to="{name: 'atualizarCliente', params: {id: cliente.id}}" type="button" class="btn btn-primary">Atualizar</router-link>
                <button  @click="excluirCliente(cliente)" type="button" class="btn btn-danger" style="float: right;">Excluir</button>
            </div>
        </div>
    </div>
</template>

<script>
import ClienteService from '../../components/cliente/domain/ClienteService';
import Imagem from '../Imagem.vue';

export default {
    data(){
        return {
            message: '',
        }
    },
    props: ['cliente'],

    components: {
        'imagem-cliente': Imagem,
    },

    methods: {
        excluirCliente(cliente){
            this.service = new ClienteService(this.$resource);
            if (confirm("Deseja excluir esse cliente?")) {
                this.service 
                    .deletar(cliente.id)
                    .then(() => 
                    {
                        this.message = "Cliente removido com sucesso";
                        this.$emit('atualizarLista',cliente, this.message);
                    }, 
                    err =>  {
                        console.log(err);
                        this.message = "Nao foi possivel remover o cliente";
                        this.$emit('atualizarLista',cliente, this.message);
                    });
            }
            
        }
    },

}
</script>

<style scoped>

</style>
