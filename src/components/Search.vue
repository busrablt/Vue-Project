<template>
    <v-card flat>
      <v-card
        class="mx-auto v-toolbar__search"
        max-width="1000"
      >
        <v-toolbar flat>
          <v-toolbar-title class="grey--text">
            Search
          </v-toolbar-title>
  
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
    </v-card>
    </v-card>


</template>


<style lang="scss">
.v-toolbar{
  &__content{
    justify-content: space-between;
  }
  &__search{
   
  }
}
</style>