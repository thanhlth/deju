import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/profile/ViewProfile'
import firebase from 'firebase'
Vue.use(Router)

//export default new Router({
  const router= new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        requireAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta:{
        requireAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  //check to see if router requires auth
  if(to.matched.some(rec => rec.meta.requireAuth)){
    //check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      //user signed in, proceed route
      next()
    } else{
      //no user signed in, redirect to login
      next({name: 'Login'})
    }
  } else{
    next()
  }
})

export default router