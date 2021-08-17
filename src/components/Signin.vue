<template>
 <div id="app">
  <v-app  id="inspire">
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            <v-card-text>
              <p>Sign in with your username and password:</p>
              <v-form @submit.prevent="login()" >
                <v-text-field
                              outline
                              label="Email"
                              type="text"
                              v-model="email"></v-text-field>
                <v-text-field
                              outline
                              hide-details
                              label="Password"
                              type="password"
                              v-model="password"></v-text-field>
                            <v-checkbox
                                v-model="checkbox"
                                :label="'Remember Me'"
                            >
                            </v-checkbox>
                            <v-card-actions >
                            <v-btn color="info" >
                                Forgot password?
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="info" type="submit">
                                Login
                            </v-btn>
                            </v-card-actions>
              </v-form>
            </v-card-text>
            
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
export default {
  methods:{
    async login(){
      try {
        const val = await firebase.auth().signInWithEmailAndPassword(this.email , this.password)
        console.log(val)
        this.$router.replace({name:"/"})
        
      } catch (err) {
        console.log(err)
      }

      
    }
  },
   data () {
    return {
      checkbox: false,
      password: "",
      email: ""
    }
  }
}
</script>