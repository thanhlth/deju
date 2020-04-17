<template>
<div class="navbar">
    <nav class="deep-purple darken-1">
        <div class="container">
            <router-link :to="{name: 'Home'}" class="brand-logo"> Deju</router-link>
            <ul class="right">
                <li v-if="!user"><router-link :to="{ name :'Signup' }">Sign Up</router-link></li>
                <li v-if="!user"><router-link :to="{ name :'Login' }"><a>Log in </a></router-link></li>
                <li v-if="user"><a  @click="gotohome">{{ user.email }}</a></li>
                <li v-if="user"><a @click="logout">Logout</a></li>
            </ul>
        </div>
    </nav>
</div>
</template>
<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name:'NavBar',
    data(){
        return{
user:null
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(() => {
              this.$router.push({ name:'Login'})
            })

        },
        gotohome(){
            db.collection('users').get().then(users => {
                users.docs.forEach(doc  => {
                    let data=doc.data()
 this.$router.push({name: 'ViewProfile', params: {id: doc.id} })
                })
                
            })
           

        }
    },
    created(){
        //let user = firebase.auth().currentUser
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                this.user=user
            } else{
                this.user=null
            }
        })
    }
}
</script>
<style>

</style>