<template>
  <v-container>
    <v-layout wrap>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section">
          <v-card-subtitle class="register__logo">
            <img src="../assets/mobven.png" width="250" height="80" alt="Mobven Logo" >
            </v-card-subtitle>
          <v-card-text>
            <v-form @submit.prevent="register()">
              <v-text-field
                outline
                label="Firstname"
                type="text"
                v-model="firstname"
              />

              <v-text-field
                outline
                label="Lastname"
                type="text"
                v-model="lastname"
              />

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
                  Have an account?
                  <router-link to="/login"> Login Here</router-link>
                </p>
                <v-spacer />
                <v-btn color="info" type="submit"> Register </v-btn>
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
import "firebase/firestore";
const db = firebase.firestore();
export default {
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((authUser) => {
          let userInfo = {
            user_id: this.userId,
            first_name: this.firstname,
            last_name: this.lastname,
            email: this.email,
          }; 

          db.collection("users")
            .doc(authUser.user.uid)
            .set(userInfo)
            .then(() => {
              this.$router.replace({ name: "Home" });
              this.$store.dispatch("loggedIn", userInfo);
            });
        })
        .catch((err) => alert(err));
    },
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      userId: 2,
    };
  },
};
</script>
<style lang="scss">
.register{
  &__logo{
    display: flex;
    justify-content: center;
  }
}
</style>