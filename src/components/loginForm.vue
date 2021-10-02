<template>
    <div id="box"  class="container-fluid w-100 mx-auto my-auto">
        <h2 class="m-2 text-center text-warning">Login</h2>
        <form id="login" class="d-flex justify-content-center align-items-center flex-column p-2">
            <input type="text" v-model="phoneEntered"
            placeholder="enter your phone number" 
            class="m-2 p-2 outline-none rounded" required>
            <input type="password" v-model="passEntered"
            placeholder="Enter password" 
            class="m-2 p-2 outline-none rounded" required>
            <button type="button" 
            class="submit-btn rounded-pill p-1 m-2"
            @click="submitLogin()">
                log in
            </button>
        </form>

        <div id="messageBox" class="container text-center my-4 w-50">
            <p class="py-4 border-bottom border-warning border-3 fs-3"> {{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            phoneEntered:'',
            passEntered:'',
            users:null,
            element:{},
            message:'you are not login'
        }
    },
    async created(){
        const response = await fetch("/dataUsers.json");
            const data = await response.json();
            console.log('data');
            console.log(data);
            this.users = data.users;
            console.log('users');
            console.log(this.users);
    },
    methods:{
        submitLogin(){
            this.element.phone = this.phoneEntered;
            this.element.password = this.passEntered;
            console.log('this.element');
            console.log(this.element);
            const result = this.users.find((item) =>{
	if((item.phone == this.element.phone) && (item.password == this.element.password)){
                    return true;}
            });
            if (result){
                this.$store.state.isLogined = true;
                this.$store.state.bookingCart = [];
                this.messageBox(1);
            }
            else{
                this.$store.state.isLogined = false;
                this.messageBox(2);
            }
            console.log('result');
            console.log(result);
            console.log('this.$store.state.isLogined');
            console.log(this.$store.state.isLogined);
        },
         messageBox(tmp){
            if(tmp == 1){
                this.message = 'you are logined ... now you can book';
            }
            else if(tmp == 2){
                this.message = 'something wrong ... try again';
            }
        }
    }
}
</script>


<style scoped>
#box{
    height: 100vh;
    /* background-image:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(./cinema.jpg); */
}
input:focus{
    outline: none;
    border:3px solid var(--bs-orange);
    color:var(--bs-yellow);
}
.submit-btn{
    width: 175px;
    height: 50px;
    background-color: blanchedalmond;
    border-color:var(--bs-orange) ;
    color: var(--bs-orange);
}
.submit-btn:hover{
    color:var(--bs-yellow);
    background: whitesmoke;
    border:3px solid var(--bs-yellow);
}
#messageBox p{
    color: var(--bs-orange);
}
</style>