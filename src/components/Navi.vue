<template>
  <v-app-bar
      app
      color="white"
      flat
      
    >
      <v-container class="py-0 fill-height header__sheet" >
        <div class="header__avatar">
          <v-avatar
            class="mr-10"
            color="grey darken-1"
            size="32"
          ></v-avatar>
        </div>
        <div class="header__btn">
          <v-btn
            v-for="link in links"
            :key="link"
            text
          >
            {{ link }}
          </v-btn>
        </div>
       
      </v-container>
    </v-app-bar>
</template>

<script>
export default {
    name:"Navi",
    data: () => ({
      links: [ 
        'Profile',
        'Updates',
      ],
     
    }),

}
</script>

<style>

</style>