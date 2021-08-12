<template>
   
      <div class="v-toolbar__search">
        <v-toolbar flat>
          <v-toolbar-title>
            <form >
              <input type="text" placeholder="Search" >
            </form>
          </v-toolbar-title>
  
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
      </div>


</template>


<style lang="scss">
.v-toolbar{
  &__content{
    justify-content: space-between;
    border-bottom: 0.5px solid #ccc;

  }
  &__search{
    
    box-shadow: none;
    
    
    input{
      min-width: 50vh; 
      
      &:focus{
        outline: none;
      }
    }
  }
}
</style>