<template>
    <div id="show" class="container-fluid py-3">
        <div class="container">
        <div class="row">
            <div class="col">
                <h2 class="fs-1 text-center text-warning mb-3">All Movies</h2>
                </div>
            </div>
        <div class="row ">
        <Base-movie1  v-for="item in items" :key="item.id"
        :nameMovie="item.name"
        :srcImg="item.src2"></Base-movie1>
        </div>
    </div>
    </div>
</template>

<script>
import BaseMovie1 from './baseMovie1.vue'
export default {
   name:'showMovie',
   components:{
       BaseMovie1
   },
   data(){
       return{
        items:[]
       }
   },
   async beforeCreate(){
        // await this.$store.commit('getMovies');
        this.items =  await this.$store.state.items;
   }
}
</script>

<style scoped>
#show{
    background: var(--bs-gray-700);
}
</style>