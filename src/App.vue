<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <nav class="px-5 py-3">
      <div class="container-fluid mx-4 d-flex justify-content-between flex-row align-items-center flex-wrap">
        <a class="navbar-brand" href="#app">
          <img src="imdb_icon.png" alt="" width="35" height="30" class="d-inline-block align-text-top rounded">
          <h3 class="text-warning d-inline mx-1 text-center">IMDB</h3>
        </a>
    
      <div class="d-flex justify-content-center gap-3 my-2 flex-row align-items-center" id="navbar">
        <div class="">
          <router-link  to="/login" class="" href="#">Login</router-link>
        </div>
        <div class="">
          <router-link to="/home" class="" href="#">All Movies</router-link>
        </div>
        <div class="">
          <router-link to="/book" class="" href="#">Book</router-link>
        </div>
        <div class="">
          <router-link  to="/bookCart" class="" href="#">Book Cart</router-link>
        </div>
    </div>
  </div>
    </nav>
  
    <router-view></router-view>


    <footer class="w-100">
      <div class="bg-dark text-center text-light p-4 ">
        <p fs-4> test front-end</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      showLoginform:false,
    }
  },
  created(){
    this.$store.commit('getMovies');
      this.items = this.$store.state.items;
  },
  methods:{
   
  }
}
</script>


<style>
nav{
  background: var(--bs-gray-800);
}
#navbar{
  display: inline-block;
}
#navbar ul{
list-style: none;
}
#navbar a{
text-decoration: none;
color: var(--bs-yellow);
}
#navbar a:hover , #navbar .router-link-active{
  text-decoration:underline;
  color: var(--bs-orange);
}
</style>
