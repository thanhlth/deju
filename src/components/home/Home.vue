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
        /*db.collection('users').get().then( users =>{
            users.docs.forEach(doc => {
                let data= doc.data()
                if(data.user){
                    //
                    marker.add
                }
            });
        })*/
        }
        
}
</script>
<style>

</style>