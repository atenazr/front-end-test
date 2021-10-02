import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      isLogined:false,
      seats:[
        [0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1],
        [0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1],
        [1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0],
        [0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1],
        [1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0]
      ],
      bookingCart:[],
      items:[]
    },
    mutations:{
      async getMovies(state){
        console.log('movies');
              // fetch("/dataMovies.json").then((res) => {
              //   const data =  res.json();
              //   state.items = data.items;
              //   return state.items;
              // });
                // .then((data) => {
                //   console.log('data');
                //   console.log(data);
                //   state.items = data.items;
                //   console.log('state.items');
                //   console.log(state.items);
                // });
                
  
              const response = await fetch("/dataMovies.json");
              const data = await response.json();
              console.log('data');
              console.log(data);
              state.items = data.items;
              console.log('state.items');
              console.log(state.items);      
      },
      getUsers(state){
        console.log('users');
              fetch("D:/test-ep/bilit2/dataUsers.json").then(res => res.json())
                .then(data => (state.items = data.users))
      },
      addSeat(state,payload){
        const nametmp = state.items[payload.idMovie].name;
        const tmp = {
          number:payload.numberSeat,
          nameMovie : nametmp
        };
        state.bookingCart.push(tmp);
        console.log('state.bookingCart');
        console.log(state.bookingCart);
        state.seats[payload.idMovie][payload.numberSeat] = 0;
      }
    },
    actions:{
    }
  })
 
