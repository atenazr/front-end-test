<template>
    <div id="base" class="col-12 col-md-6 col-lg-4 ">
        <div class="border rounded my-2 p-3 text-center d-flex justify-content-center flex-column align-items-center">
        <div id="img-container" class="rounded overflow-hidden my-2"><img  class="img-fluid h-100" :src="srcImg" alt=""></div>
        <router-link :to="seatIdMovie" class="text-warning rounded mx-auto"
        ><h3 class="">{{ nameMovie }}</h3>
        </router-link>
        <div class="fs-4 text-white">{{ yearMovie }}</div>
        <div class="fs-5 text-white">{{ dateMovie }} , {{ timeMovie }} </div>
        <div ></div>
    </div>
    </div>
</template>

<script>
export default {
    name:'baseMovie',
    props:[
        'idM',
        'nameMovie',
        'yearMovie',
        'srcImg',
        'dateMovie',
        'timeMovie'
    ],
    methods:{
       
    },
    computed:{
        seatIdMovie(){
            console.log(this.idM);
            return '/seat/' + this.idM
        }
    }
}
</script>

<style scoped>
#base a{
    text-decoration: none;
}
#base a:hover{
  color: var(--bs-orange) !important;
}
#name{
    cursor: pointer;
}
#name:hover h3{
    color: antiquewhite;
}
#img-container{
    width: 20vw;
    height: 20vw;
    min-width: 200px;
    min-height: 200px;
}
#img-container img{
    object-fit: cover;
}
</style>