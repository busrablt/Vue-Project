import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH1LjLqEAH-kF0pT7mcTPtUSFr4WdoP4c",
  authDomain: "vuelogin-903ec.firebaseapp.com",
  projectId: "vuelogin-903ec",
  storageBucket: "vuelogin-903ec.appspot.com",
  messagingSenderId: "9569109473",
  appId: "1:9569109473:web:621952eff2b400c324bea0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    store.dispatch("loggedIn", user)
  }
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
});