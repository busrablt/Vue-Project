<template>
  <div class="container">
    <div class="main">
      <img src="../assets/mobven.png" alt="Logo" width="150" height="50" />
      <div class="information">
        <img src="../assets/bell.svg" alt="Logo" width="50" height="20" />
        <img
          src="../assets/about.svg"
          alt="Logo"
          width="50"
          height="20"
          style="margin-left: -10px"
        />
        <span>{{ user.first_name }} {{ user.last_name }}</span>
      </div>
    </div>
  </div>
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
      menuItems: [
        { icon: "mdi-account", name: "Profile", route: "/profile" },
        { icon: "mdi-cog-outline", name: "Settings", route: "/settings" },
        { icon: "mdi-logout", name: "Log Out", route: "/logout" },
      ],
    };
  },
  created() {
    let currentUser = firebase.auth().currentUser;
    let col = firebase.firestore().collection("users");

    col
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        this.user = doc.data();
        this.$store.dispatch("setUser", doc.data());
      })
      .catch((err) => console.error(`Error ${err}`));
  },
};
</script>
<style lang="scss" scoped>
.container {
  .main {
    display: flex;
    img {
      @media only screen and(max-width:768px) {
        width: 80px;
        height: 30px;
      }
    }
    .information {
      display: flex;
      flex-direction: row;
      cursor: pointer;
      align-items: center;
      justify-content: flex-end;
      span {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
}
</style>