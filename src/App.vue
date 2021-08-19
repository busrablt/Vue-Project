<template>
  <v-app>
    <div v-if="isLoggedIn">
      <Navi />
      <v-main class="grey lighten-3">
        <v-container fluid>
          <v-row>
            <v-col cols="2" lg="2" md="2" sm="2" v-if="showSidebar">
              <Sidebar />
            </v-col>
            <v-col :lg="showSidebar ? 10 : 12" :md="showSidebar ? 10 : 12" :sm="showSidebar ? 10 : 12">
              <v-sheet min-height="100vh" rounded="lg">
                <v-btn @click="toggleSidebar" fab elevation="2" x-small >
                  <v-icon>{{showSidebar ? "mdi-chevron-left" : "mdi-chevron-right"}} </v-icon> 
                  </v-btn>
                <router-view />
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </div>
    <div v-else>
      <router-view/>
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
    showSidebar: true
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
      this.showSidebar = !this.showSidebar
    },
    // Firebase'de currentUser var mı kontrol et
    navigate() {
      this.$router.replace("/");

      if (this.isLoggedIn) {
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
</style>
