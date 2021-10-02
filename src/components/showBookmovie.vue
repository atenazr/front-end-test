<template>
    <div id="book" class="container-fluid pt-4">
        <div class="container">
        <div class="row">
        <h2 class="col text-center text-warning">book Movies</h2>
        </div>
        

        <div class="row " v-if="checkLogin">
        <Base-movie  v-for="item in items" :key="item.id"
        :idM="item.id"
        :nameMovie="item.name" :yearMovie="item.year"
        :srcImg="item.src1" :dateMovie="item.date"
        :timeMovie="item.time"
        ></Base-movie>
        </div>

        <div id="message" class="row" v-if="!checkLogin">
            <p class="text-center py-3 text-white fs-3">
                you are not login ... please <router-link to="/login" class=""><h4 class="d-inline text-white text-decoration-underline fs-3 text-uppercase">login</h4></router-link></p>
            
        </div>
    </div>
    </div>
</template>

<script>
import BaseMovie from './baseMovie.vue'

export default {
   components:{
       BaseMovie
   },
   emits:[
       'seatBook'
   ],
   data(){
       return{
           items:[],
           islogin:false
       }
   },
    created(){
        this.$store.commit('getMovies');
        this.items = this.$store.state.items;
   },
   computed:{
       checkLogin(){
           console.log('this.$store.state.islogined');
           console.log(this.$store.state.islogined);
            return this.$store.state.isLogined;   
       }
   }
}
</script>

<style scoped>
#book{
    min-height: 80vh;
    background-color: var(--bs-secondary);
}
#message a{
    text-decoration: none;
}
</style>