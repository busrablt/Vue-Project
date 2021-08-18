<template>
  <v-app>
    <Navi v-if="isLoggedIn"/>
      <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="2" lg="2" md="2" sm="2" v-if="isLoggedIn">
            <Sidebar/>
        </v-col>
        <v-col lg="10" md="10" sm="10">
          <v-sheet
            min-height="100vh"
            rounded="lg"
          >
            <router-view/>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Navi from "./components/Navi.vue"
import Sidebar from "./components/Sidebar.vue"

export default {
  
  name: 'App',
  data: () => ({
    showLogin: true,
    links: [ 
      'Profile',
      'Updates',
    ],
  
  }),
  components: {
    Sidebar,
    Navi       
      
  },
  computed: {
    isLoggedIn: function(){ return  this.$store.getters.isLoggedIn}
  },
  created() {
    this.navigate()
  },
  methods: {
    // Firebase'de currentUser var mı kontrol et
    navigate() {
        this.$router.replace("/")

      if(this.isLoggedIn) {
        this.$router.replace("/")
      } else {
        this.$router.replace("/login")

      }
    }
  }  

};
</script>
<style lang="scss">

  .header
  {
    &__sheet{
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>