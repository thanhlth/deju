<template>
    <div class="home">
        <h2>Home</h2>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name:'Home',
    data(){
        return{

        }
    },
    methods:{
        
    },
    created(){
        console.log(firebase.auth().currentUser)
        }
}
</script>
<style>

</style>