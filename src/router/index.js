import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../components/Signin.vue"
import Stats from "../components/Stats.vue"
import Projects from "../components/Projects.vue"
import Register from "../components/Register.vue"
import Calendar from "../components/Calendar"



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/stats",
    name: "Stats",
    component:Stats,
  },
  {
    path: "/projects",
    name: "Projects",
    component:Projects,
  },
  {
    path: "/calendar",
    name: "Calander",
    component: Calendar,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
