<template>
  <div class="menu">
    <div class="menu__top-elements">
      <div
        v-for="(item, index) in topMenuItems"
        :key="index"
        link
        class="menu__top-elements"
      >
        <router-link :to="item.route" class="menu__router">
          <div class="menu__item-title">
            <v-icon>{{ item.icon }}</v-icon>
            <div class="item-name">{{ item.name }}</div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="menu__bottom-elements">
      <div
        v-for="(item, index) in bottomMenuItems"
        :key="index"
        link
        class="menu__bottom-elements"
      >
        <router-link :to="item.route" class="menu__router">
          <div class="menu__item-title" @click="signOut">
            <v-icon>{{ item.icon }}</v-icon>
            <div class="item-name">{{ item.name }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import {
  mdiHome,
  mdiChartBar,
  mdiFolderOpenOutline,
  mdiCalendar,
  mdiLogout,
  mdiCogOutline,
} from "@mdi/js";
import "firebase/auth";
export default {
  name: "Sidebar",
  data: () => ({
    topMenuItems: [
      { icon: mdiHome, name: "Overview", route: "/" },
      { icon: mdiChartBar, name: "Stats", route: "/stats" },
      { icon: mdiFolderOpenOutline, name: "Projects", route: "/projects" },
      { icon: mdiCalendar, name: "Calendar", route: "calendar" },
    ],
    bottomMenuItems: [
      { icon: mdiLogout, name: "Logout", route: "/logout" },
      { icon: mdiCogOutline, name: "Settings", route: "/settings" },
    ],
  }),
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch("signOut");
          this.$router.replace("/login");
        });
    },
  },
};
</script>

<style lang="scss">
.menu {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 10px 0;
  background-color: #ffff;
  &__top-elements {
    margin-bottom: 30px;
    padding-left: 8px;
    @media only screen and(max-width:768px) {
      margin-right: 10px;
    }
  }
  &__bottom-elements {
    margin-bottom: 30px;
    padding-left: 8px;
  }

  &__router {
    text-decoration: none;
    margin-top: 15px;
  }
  &__item-title {
    color: black;
    display: flex;
  }
  .item-name {
    margin-left: 10px;
    @media only screen and(max-width:768px) {
      display: none;
    }
  }
}
</style>
