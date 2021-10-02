<template>
    <div id="seat">
        <div id="messageBox" class="container text-center my-4 w-50">
            <p class="py-4 border-bottom border-warning border-3 fs-3"> {{ message }}</p>
            <router-link to="/book">back to book page</router-link>
        </div>
        <div class="container-fluid">
            <div class="container px-auto">
                <div class="row g-2">
                    <div v-for="(seat,index) in seats" :key="index" 
                    @click="bookTheSeat(seat,index)"
                    class=" col-6 col-md-3 col-lg-2 ">
                    <div class="seat text-center border border-1 rounded">
                        <p class="demo" :class="{unavailable : seat == 0}"> seat {{ index+1}} </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    data(){
        return{
            seats:[],
            idMovie:null,
            message:'now you can book your seat'
        }
    },
    props:[
        'idm'
    ],
    created(){
        console.log('this.$route.params');
        console.log(this.$route.params);
        this.idMovie = this.$route.params.movieId;
        this.seats = this.$store.state.seats[Number(this.idMovie)];
        console.log('this.$store.state.seats');
        console.log(this.$store.state.seats);

    },
    methods:{
        bookTheSeat(se,ix){
            if(se == 0){
                this.message = 'sorry... this seat not available';
            }
            else{
                this.$store.commit('addSeat',{
                    numberSeat:ix,
                    idMovie:this.idMovie,
                });
                this.message = 'done ... this seat is yours';
            }
        }
    },
    watch:{
        // seats(){
        //     this.seats = this.$store.state.seats[this.idMovie];
        // }
    }
}
</script>


<style scoped>
#seat{
    height: 100vh;
}
#seat .seat{
    border-color:var(--bs-orange) !important ;
}
#messageBox p{
    color: var(--bs-orange);
}
#messageBox a{
    color: var(--bs-orange);
    font-weight:700;
}
.demo{
    color: blue;
}
.demo.unavailable{
    color: brown;
}
</style>