<template>
  <div>
    <form @submit.prevent="cadastrarCliente">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input v-model="cliente.nome" type="text" class="form-control" placeholder="Digite seu Nome">
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="cliente.email"  type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input  v-model="cliente.senha" type="password" class="form-control"  placeholder="Password">
      </div>

      <div class="form-group">
        <input @change="changeImage($event)" enctype="multipart/form-data" type="file" accept="image/*" >
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>

import Imagem from '../Imagem.vue'
import Cliente from '../domain/Cliente.js';
import ClienteService from '../domain/ClienteService'
import { routes } from '../../../router.js';

export default {

  data() {
    return {
      cliente: new Cliente(),
      routes,
    }
  },
  props: ['id'],
  
  components: {
    'imagem-cliente': Imagem,
  },

  methods:{
    cadastrarCliente(){
        this.service = new ClienteService(this.$resource);
        this.service
          .cadastrar(this.cliente)
          .then(response => 
            {
                console.log(response),
                this.cliente = new Cliente()
            })
          .catch(erro => console.log(erro));
          if (this.cliente.id){
            this.$router.push({ name: 'cliente'});
          }
      
    },
    changeImage(event){
        const fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = (e) => {
          this.cliente.imagem = e.target.result
        };
    }
  },
  created(){
      if (this.id) {
         this.service = new ClienteService(this.$resource);
         this.service
            .buscar(this.id)
            .then(cliente => this.cliente = cliente)
      }
  }

}

</script>

<style scoped>
.file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}
</style>