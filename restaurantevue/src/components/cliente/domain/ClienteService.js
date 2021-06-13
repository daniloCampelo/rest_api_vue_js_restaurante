export default class clienteService {

    constructor(resource){
        this._resource = resource('cliente{/id}');
    }

    listar() {
        return this._resource
          .query()
          .then(res => res.json(), err => { 
                console.log(err);
                throw new Error('Não foi possivel buscar pelos clientes.');
            });
    }

    cadastrar(cliente) {
        if( cliente.id ){
            return this._resource
                .update({ id: cliente.id }, cliente );
        }else{
            return this._resource
                .save(cliente);
        }
    }

    deletar(id) {
        return this._resource
            .delete({id})
    }

    buscar(id){
        return this._resource
            .get({ id })
            .then(res => res.json());
    }

}