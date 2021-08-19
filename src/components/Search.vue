<template>
   
      <div class="v-toolbar__search">
        <v-toolbar flat >
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


<style lang="scss" scoped>
.v-toolbar{
  
  &__content{
    justify-content: space-between;
    border-bottom: 0.5px  #ccc;
    
  }
  &__search{
    
    box-shadow: none;
    
    
    input{
      min-width: 50vh; 
      font-size: 16px;
      
      &:focus{
        outline: none;
      }
    }
  }
}
</style>