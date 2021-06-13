<template>
  <div class="corpo">
  
    <div>
      <nav>
        <ul class="nav nav-tabs">
          <li v-for="route in routes" class="nav-item" >
            <router-link class="nav-link" :to="route.path" >{{ route.titulo }}</router-link>
          </li>
        </ul>
      </nav>  
    </div>

    <transition>
      <router-view></router-view>
    </transition>
  
  </div>
</template>

<script>
import { routes }  from './router.js';

export default {
    data(){
      return {
        routes
      }
    }
}
</script>

<style scoped>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
</style>