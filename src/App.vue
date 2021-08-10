<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2" lg="2" md="2" sm="2">
              <sidebar/>
          </v-col>
          <v-col lg="10" md="10" sm="10">
            <home/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  
</template>

<script>
import Sidebar from "./components/Sidebar.vue"
import Home from "./views/Home.vue"

export default {
  
  name: 'App',
  data: () => ({
      links: [ 
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
     
    }),
    components:{
        Sidebar,
        Home,
        
        
    }


};
</script>

<style lang="scss">

</style>