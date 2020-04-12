import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false
let app=null;
//wait for frebase auth to init before creating the app
firebase.auth().onAuthStateChanged(() =>{//whenever log in or log out
  //init app if not already created
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      //components:{App},
      //template: '<App/>'
      render: h => h(App)
    })
  }
  
})
/* eslint-disable no-new */

