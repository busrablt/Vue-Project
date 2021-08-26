<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height header__sheet">
      <div>
        <img src="../assets/mobven.png" alt="Logo" width="150" height="50" />
      </div>
      <div class="information">
        <v-icon class="information__icon" size="20"
          >mdi-help-circle-outline</v-icon
        >
        <v-icon class="information__icon" size="20">mdi-bell-outline</v-icon>
        <h4 class="information__icon">{{`${this.user.first_name} ${this.user.last_name}`}}</h4>
        <v-avatar
          class="mr-10 information__icon"
          color="grey darken-1"
          size="32"
        ></v-avatar>
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
export default {
  name: "Navi",
  data: () => {
    return {
      user: {},
    };
  },
  created() {
    let currentUser = firebase.auth().currentUser;
    let col = firebase.firestore().collection("users");

    col.doc(currentUser.uid)
      .get()
      .then((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data())
        this.user = doc.data()
        this.$store.dispatch("setUser", doc.data())
      })
      .catch((err) => console.error(`Error ${err}`));
      
  },
  
};
</script>
<style lang="scss" scoped>
.information {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__icon {
    margin: 0.4em;
  }
}
</style>