<template>
    <div>
        <div>
            <h1 v-text="titulo"> </h1>
             <div class="input-group">
                 <div class="form-outline">
                    <input type="search" class="form-control" @input="filtro = $event.target.value" :placeholder="placeholder" />

                 </div>
            </div>

            {{ message }}
            <div class="container-fluid d-flex flex-wrap">
                <div v-for="cliente in clientesComFiltro">
                    <div>
                        <cliente-view :cliente="cliente" @atualizarLista="atualizarLista"></cliente-view> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ClienteView from '../../components/cliente/ClienteView.vue';
import ClienteService from '../../components/cliente/domain/ClienteService';

export default {
    
    data(){
      return {
          titulo: "Cliente",
          clientes: [],
          message: '',
          placeholder: "Filtre pelo titulo",
          filtro: '',
      }
    },

    components: { 
        'cliente-view': ClienteView, 
    },

    methods: {
        atualizarLista(cliente, msg=''){
            let indice = this.clientes.indexOf(cliente);
            this.clientes.splice(indice, 1);
            this.message = msg;
        }
    },

    mounted() {
        this.service = new ClienteService(this.$resource);
        this.service
            .listar()
            .then(clientes => this.clientes = clientes, erro => this.mensagem = erro.message);
    },

    computed: {
        clientesComFiltro(){
            if (this.filtro) {
                let exp = new RegExp(this.filtro.trim(), 'i');
                return this.clientes.filter(cliente => exp.test(cliente.nome));
            } else {
                return this.clientes;
            }
        }
    },
    
    created(){
        this.atualizarLista(this.cliente);
        this.service = new ClienteService(this.$resource);
        this.service
            .listar()
            .then(clientes => this.clientes = clientes, erro => this.mensagem = erro.message);
    }
}
</script>

<style scoped>
 .card{
     margin: 10px;
 }
</style>
