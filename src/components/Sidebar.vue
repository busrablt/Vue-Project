<template>
  <v-sheet rounded="lg" height="90vh">
    <v-list color="transparent">
      <v-list-item 
        v-for="(item, index) in subMenuItems"
        :key="index"
        link
      >
      <v-list-item-content > 
        <router-link :to="item.route" class="router" >  
          <v-list-item-title class="item-title">
            <v-icon >{{ item.icon }}</v-icon> {{ item.name }}
          </v-list-item-title>
        </router-link>
      </v-list-item-content>
      </v-list-item>
      
      <div class="list-item">
        <v-list-item
        v-for="(item, index) in buttomMenuItems"
        :key="index"
        link
        >
        <v-list-item-content>
          <router-link :to="item.route" class="router" > 
            <v-list-item-title class="item-title">
              <v-icon>{{ item.icon }}</v-icon> {{ item.name }}
            </v-list-item-title>
          </router-link>
        </v-list-item-content>
        </v-list-item>
     </div>
    
    </v-list>
  </v-sheet>
</template>

<script>
export default {
    name:"Sidebar",
    data:()=>({
        subMenuItems: [
          {icon: "mdi-home", name: "Overview", route:"/"}, 
          {icon: "mdi-chart-bar", name: "Stats", route:"/stats"}, 
          {icon: "mdi-folder-open-outline", name: "Projects", route:"/projects"}, 
          {icon: "mdi-calendar", name: "Calendar", route:"calendar"}, 

      ],
      buttomMenuItems:[
        {icon: "mdi-cog-outline", name: "Settings", route:"/"}, 
        {icon: "mdi-logout", name: "Log Out", route:"/"}  
      ]
    })
    

}
</script>

<style lang="scss">
.list-item{
    margin-top: 240px; 
  
}

.router{
  text-decoration: none;

}
.item-title{
  color: black;
}


</style>