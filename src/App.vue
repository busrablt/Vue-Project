<template>
  <v-app>
    <div v-if="isLoggedIn">
      <Navi />
      <v-main class="grey lighten-3">
        <v-container fluid>
          <v-row>
            <div class="col-left">
              <Sidebar />
            </div>
            <div class="col-right">
              <v-sheet min-height="100vh" rounded="lg">
                <router-view />
              </v-sheet>
            </div>
          </v-row>
        </v-container>
      </v-main>
    </div>
    <div v-else>
      <router-view />
    </div>
  </v-app>
</template>
<script>
import Navi from "./components/Navi.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  data: () => ({
    links: ["Profile", "Updates"],
    showSidebar: true,
  }),
  components: {
    Sidebar,
    Navi,
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  created() {
    this.navigate();
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    navigate() {
      let currentRoute = this.$route.name;
      if (this.isLoggedIn) {
        if (currentRoute == "Login" || currentRoute == "Register")
          this.$router.replace("/");
      } else {
        this.$router.replace("/login");
      }
    },
  },
};
</script>
<style lang="scss">
.header {
  &__sheet {
    flex-direction: row;
    justify-content: space-between;
  }
}
.row {
  flex-wrap: nowrap !important;
}
.col-lg-1 {
     
  flex: 0 0 6.333333%;
  max-width: 6.333333%;
}
.col-left{
  width: 20%;
  padding: 12px;
}
.col-lg-11 {
  flex: 0 0 93.666667%;
  max-width: 93.666667%;
}
.col-right {
  width: 84%;
  padding: 12px 0;
  @media screen and(max-width:768px) {
        width: 78%;
    
  }
}
</style>
