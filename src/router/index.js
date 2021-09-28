import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home"



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home

  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue")
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
      import("../views/Stats.vue"),
  },

  {
    path: "/calendar",
    name: "Calander",
    component: () =>
      import("../views/Calendar.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
