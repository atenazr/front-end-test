import VueRouter from 'vue-router'

import showMovie from './components/showMovie.vue'
import showBookMovie from './components/showBookmovie.vue'
import loginForm from './components/loginForm.vue'
import theSeats from './components/theSeats.vue'
import bookCart from './components/bookCart.vue'
const routes =[
  {
    path:'/',component:loginForm
  },
  {
    path:'/movies',component:showMovie
  },
  {
    path:'/book',component:showBookMovie
  },
  {
    path:'/login',component:loginForm
  },
  {
    name:'seat',
    path:'/seat/:movieId',props:true,component:theSeats
  },
  {
    path:'/bookCart' , component:bookCart
  },
  {
    path:'/*' ,component:showMovie
  }
]

const router = new VueRouter({
    mode: 'history',
    routes 
  })

  export default router