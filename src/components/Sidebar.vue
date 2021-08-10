<template>
  <v-sheet rounded="lg" height="100vh" class="menu">
    <v-list color="transparent">
      <div class="menu__elements">
        <div class="menu__list-item">
        <v-list-item
          v-for="(item, index) in subMenuItems"
          :key="index"
          link
        >
        <v-list-item-content > 
          <router-link :to="item.route" class="menu__router" >  
            <v-list-item-title class="menu__item-title">
              <v-icon >{{ item.icon }}</v-icon> {{ item.name }}
            </v-list-item-title>
          </router-link>
        </v-list-item-content>
        </v-list-item>
        </div>
        <div class="menu__list-item">
          <v-list-item
          v-for="(item, index) in buttomMenuItems"
          :key="index"
          link
          >
          <v-list-item-content>
            <router-link :to="item.route" class="menu__router" > 
              <v-list-item-title class="menu__item-title">
                <v-icon>{{ item.icon }}</v-icon> {{ item.name }}
              </v-list-item-title>
            </router-link>
          </v-list-item-content>
          </v-list-item>
      </div>
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
.menu{

  &__elements{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding:10px 0 10px 0;
  }

  &__router{
    text-decoration: none;

  }
  &__item-title{
    color: black;
  }

}

</style>