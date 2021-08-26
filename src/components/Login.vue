<template>
  <v-container class="login">
    <v-layout wrap>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section">
          <v-card-text>
            <p>Sign in with your email and password:</p>
            <v-form @submit.prevent="login()">
              <v-text-field outline label="Email" type="text" v-model="email" />

              <v-text-field
                outline
                hide-details
                label="Password"
                type="password"
                v-model="password"
              />
              <v-card-actions>
                <p>
                  Need an account?
                  <router-link to="/register"> Register Here</router-link>
                </p>
                <v-spacer />
                <v-btn color="info" type="submit"> Login </v-btn>
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
