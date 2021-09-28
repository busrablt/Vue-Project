<template>
  <v-app>
    <div v-if="isLoggedIn">
      <Navi />
      <v-main class="grey lighten-3">
        <v-container fluid>
          <v-row>
            <v-col
              :lg="showSidebar ? 2 : 1"
              :md="showSidebar ? 2 : 1"
              :sm="showSidebar ? 2 : 1"
            >
              <Sidebar />
            </v-col>
            <v-col
              :lg="showSidebar ? 10 : 11"
              :md="showSidebar ? 10 : 11"
              :sm="showSidebar ? 10 : 11"
            >
              <v-sheet min-height="100vh" rounded="lg">
                <router-view />
              </v-sheet>
            </v-col>
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
.col-lg-11 {
  flex: 0 0 93.666667%;
  max-width: 93.666667%;
}
</style>
