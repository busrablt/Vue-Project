import Vue from "vue";
import VueRouter from "vue-router";
import Projects from "../components/Projects.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import("../components/Register.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../components/Login.vue"),
  },

  {
    path: "/stats",
    name: "Stats",
    component: () =>
      import("../components/Stats.vue"),
  },

  {
    path: "/calendar",
    name: "Calander",
    component: () =>
      import("../components/Calendar.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
