<template>
    <div id="cart">
        <div id="message" class="container text-center my-4 w-50">
                <h3 v-if="!userlogined" class="py-4 border-bottom border-warning border-3">you must log in ... go to log in page</h3>
        </div>
            <div class="container text-center my-4 w-50" v-if="userlogined">
            <h3 class="py-4 border-bottom border-warning border-3">your book cart</h3>
            <div  class="container text-center my-4 w-50" v-for="(book,index) in books" :key="index" >
            <h3 class="text-dark">seat {{ book.number }} , {{ book.nameMovie }} movie</h3>
            </div>
            </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            books:[],
            userlogined:false,
        }
    },
    created(){
        this.books = this.$store.state.bookingCart;
        this.userlogined = this.$store.state.isLogined;
        console.log('this.books');
        console.log(this.books);
    },
    computed:{
        // userlog(){
        //     this.userlogined = this.$store.state.isLogined;

        // }
    }
}
</script>

<style scoped>
#cart{
    height: 100vh;
}
#message h3{
    color: var(--bs-orange);
}
</style>
