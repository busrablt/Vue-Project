import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { db } from "../main"
import { vuexfireMutations, firestoreAction } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoCards: [],
    inProgressCards: [],
    completedCards: [],
    isLoggedIn: false,
    user: null
  },

  plugins: [createPersistedState()],

  mutations: {
    ...vuexfireMutations,
    setUser(state, user) {
      state.user = user;
    },
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  actions: {
    moveCard({ dispatch }, payload) {
      const nextStatus = payload.nextStatus;
      dispatch("removeFromBoard", {
        cardId: payload.cardInfo.id,
        status: payload.status,
      });
      payload.status = nextStatus;
      dispatch("addToBoard", payload);
    },
    bindTodoCards: firestoreAction(({ bindFirestoreRef, state }) => {
      bindFirestoreRef("todoCards", db.collection("users")
      .doc(state.user.user_id)
      .collection("todo"))
    }),
    bindInProgressCards: firestoreAction(({ bindFirestoreRef, state }) => {
      bindFirestoreRef("inProgressCards", db.collection("users")
        .doc(state.user.user_id)
        .collection("inProgress"));
    }),
    bindCompletedCards: firestoreAction(({ bindFirestoreRef, state }) => {
      bindFirestoreRef("completedCards", db.collection("users")
        .doc(state.user.user_id)
        .collection("completed"));
    }),

    addToBoard: firestoreAction(({ state }, payload) => {
      db.collection("users")
        .doc(state.user.user_id)
        .collection(payload.status)
        .doc(payload.cardInfo.id)
        .set(payload.cardInfo).then(() => {
          console.log("Document successfully written!");
        }).catch((error) => {
          console.error("Error writing document: ", error);
        });
    }),

    removeFromBoard: firestoreAction(({ state }, payload) => {
      return db.collection("users")
        .doc(state.user.user_id)
        .collection(payload.status)
        .doc(payload.cardId)
        .delete()
    }),

    updateBoard: firestoreAction(({ state }, payload) => {
      return db.collection("users")
        .doc(state.user.user_id)
        .collection(payload.status)
        .doc(payload.cardInfo.id)
        .update(payload.cardInfo)
    }),
    loggedIn({ commit }) {
      commit("loggedIn");
    },
    signOut({ commit }) {
      commit("signOut");
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
  },
  getters: {
    todo: (state) => state.todoCards,
    inProgress: (state) => state.inProgressCards,
    completed: (state) => state.completedCards,
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.user,
  },
});