import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './viewer/Home.vue'
import Cliente from './viewer/cliente/Cliente.vue'
import Pedido from './viewer/pedido/Pedido.vue'
import Restaurante from './viewer/restaurante/Restaurante.vue'
import Item from './viewer//item/Item.vue'
import Administrador from './viewer/administrador/Administrador.vue'
import AtualizarCliente from './viewer/cliente/AtualizarCliente.vue'
import Login from './viewer/login/Login.vue'
import CadastrarCliente from './viewer/cliente/CadastroCliente.vue'

import provedor from './provedor.js'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        component: Home,   
        titulo: 'Home',
        name: 'home',
        menu: true,
        meta: {
            publica: true
        }
    },
    {
        path: '/Cliente',
        component: Cliente,
        titulo: 'Cliente',
        name: 'cliente',
        menu: true,
    },
    {
        path: '/CadastrarCliente/',
        component: CadastrarCliente,
        titulo: 'Cadastrar Cliente',
        name: 'cadastrarcliente',
        menu: true,
        meta: {
            publica: true
        }
    },
    {
        path: '/AtualizarCliente/:id',
        component: AtualizarCliente,
        titulo: 'Atualizar Cliente',
        name: 'atualizarCliente',
        menu: false,
    },
    {
        path: '/pedido',
        component: Pedido,
        titulo: 'Pedido',
        name: 'pedido',
        menu: true,
    },
    {
        path: '/restaurante',
        component: Restaurante,
        titulo: 'Restaurante',
        name: 'restaurante',
        menu: true,
    },
    {
        path: '/item',
        component: Item,
        titulo: 'Item',
        name: 'item',
        menu: true,
    },
    {
        path: '/administrador',
        component: Administrador,
        titulo: 'Administrador',
        name: 'administrador',
        menu: true,
    },
    {
        path: '/login',
        component: Login,
        titulo: 'Login',
        name: 'login',
        menu: false,
        meta: {
            publica: true
        }
    }

]

const router = new VueRouter({
    routes,
    mode: 'history',
})

router.beforeEach((routeTo, routeFrom, next) => {
    if (!routeTo.meta.publica && !provedor.state.token) {
        return next({ path: '/login' })
    }
    next()
})

export default router