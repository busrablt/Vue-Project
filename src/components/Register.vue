<template>
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            <v-card-text>
              <v-form @submit.prevent="pressed()">
                 <v-text-field
                              outline
                              label="Firstname"
                              type="text"
                              v-model="firstname"/>

                <v-text-field
                              outline
                              label="Lastname"
                              type="text"
                              v-model="lastname"/>

                <v-text-field
                              outline
                              label="Email"
                              type="text"
                              v-model="email"/>

                <v-text-field
                              outline
                              hide-details
                              label="Password"
                              type="password"
                              v-model="password"/>
                            <v-card-actions >
                            <p>Have an account? <router-link to="/login"> Login Here</router-link></p>
                            <v-spacer/>
                            <v-btn color="info" type="submit">
                                Register
                            </v-btn>
                            </v-card-actions>  
              </v-form>
            </v-card-text>
            
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
export default {
    methods:{
       async pressed(){
           try {
               const user =  firebase.auth().createUserWithEmailAndPassword(this.firstname,this.lastname,this.email , this.password)
               console.log(user)
               this.$router.replace({name:"Stats"})
           } catch (err) {
               console.log(err)
           }
        
        }
    },
   data () {
    return {
      firstname: "",
      lastname: "",
      password: "",
      email: ""
    }
  }
}
</script>