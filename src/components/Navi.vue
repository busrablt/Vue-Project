<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height header__sheet">
      <div>
        <img src="../assets/mobven.png" alt="Logo" width="150" height="50" />
      </div>
      <div class="information">
         <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon size="20">
                  mdi-help-circle-outline
                </v-icon>
              </v-btn>
            </template>
            <span>about</span>
          </v-tooltip>
        <v-icon class="information__icon" size="20">mdi-bell-outline</v-icon>

        <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="information__btn"
          >
           {{user.first_name}} {{user.last_name}}
          </v-btn>
        </template>
  
        <v-card>
          <v-list>
            <v-list-item v-for="(item,index) in menuItems" :key="index" class="v-list-item v-list-item--link theme--light">
              <router-link :to="item.route" class="information__list-route">
                <v-list-item-title>
                  <v-icon>{{item.icon}}</v-icon> 
                  {{item.name}}
                </v-list-item-title>
              </router-link>
            </v-list-item>
            
          </v-list>
        </v-card>
      </v-menu>
       
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
      menuItems:[
      { icon: "mdi-account", name: "Profile", route: "/profile" },
      { icon: "mdi-cog-outline", name: "Settings", route: "/settings" },
      { icon: "mdi-logout", name: "Log Out", route: "/logout" },
      
      ]
    
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
.container{
  flex-wrap: nowrap !important;
}
.information {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__icon {
    margin: 0.4em;
  }
  &__btn{
    box-shadow: none;
    background-color: white !important;
  }
  &__list-route{
    text-decoration: none;
    color: black;
   
  }
}
</style>