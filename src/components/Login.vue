<template>
    <v-container class="login">
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          
          <v-card elevation="4" light tag="section">
            <v-card-subtitle class="login__logo">
            <img src="../assets/mobven.png" width="250" height="80" alt="Mobven Logo" >
            </v-card-subtitle>
            <v-card-text>
              
              <v-form @submit.prevent="login()" >
                <v-text-field
                              prepend-icon="mdi-account"
                              outline
                              label="Email"
                              type="text"
                              v-model="email"/>

                <v-text-field
                              prepend-icon="mdi-lock"
                              outline
                              hide-details
                              label="Password"
                              type="password"
                              v-model="password"/>
                            <v-card-actions >
                            <p>Need an account? <router-link to="/register"> Register Here</router-link></p>
                            <v-spacer/>
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
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  methods: {
    async login() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: "Home" });
        this.$store.dispatch("loggedIn");
      } catch (err) {
        alert(err);
      }
    },
  },
  data() {
    return {
      password: "",
      email: "",
    };
  },
};
</script>
<style lang="scss">
.login{
  &__logo{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
.v-application--wrap{
  justify-content: center;
}
</style>