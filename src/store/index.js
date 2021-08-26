import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoCards: [],
    inProgressCards: [],
    completedCards: [],
    isLoggedIn: false,
    token: null,
    user: null
  },
  mutations: {
    // payload: {cardInfo, status}
    updateCardInfo(state, payload) {
      // find array
      const arrayMap = new Map()
      arrayMap.set("todo", state.todoCards)
      arrayMap.set("inProgress", state.inProgressCards)
      arrayMap.set("completed", state.completedCards)

      let info = payload.cardInfo
      let selectedArray = arrayMap.get(payload.status)
      // find index of object
      let cardIndex = selectedArray.findIndex((card) => card == info)
      // change object information with payload
      selectedArray[cardIndex] = info

    },
    addToBoard(state, payload) {
      const arrayMap = new Map()
      arrayMap.set("todo", state.todoCards)
      arrayMap.set("inProgress", state.inProgressCards)
      arrayMap.set("completed", state.completedCards)

      let selectedArray = arrayMap.get(payload.status)
      selectedArray.push(payload.cardInfo)

    },

    removeFromBoard(state, payload) {
      const arrayMap = new Map()
      arrayMap.set("todo", state.todoCards)
      arrayMap.set("inProgress", state.inProgressCards)
      arrayMap.set("completed", state.completedCards)

      let selectedArray = arrayMap.get(payload.status)

      let itemIndex = selectedArray.findIndex((card) => card == payload.cardInfo)
      selectedArray.splice(itemIndex, 1)
    },

    loggedIn(state) {
      state.isLoggedIn = true

    },

    signOut(state) {
      state.isLoggedIn = false

    }
    

  },
  actions: {
    loggedIn({
      commit
    }) {
      commit("loggedIn")
    },

    signOut({
      commit
    }) {
      commit("signOut")
    },

    addToBoard({
      commit
    }, payload) {
      commit("addToBoard", payload)
    },

    updateCardInfo({
      commit
    }, payload) {
      commit("updateCardInfo", payload)
    },

    removeFromBoard({
      commit
    }, payload) {
      commit("removeFromBoard", payload)
    },

    moveObject({
      commit
    }, payload, nextStatus) {
      commit("removeFromBoard", payload)
      payload.status = nextStatus
      commit("addToBoard", payload)
    },

    signIn({
      commit
    }, credentials) {
      localStorage.setItem("auth/signin", credentials)
      commit("auth/signin", credentials)
    }

  },
  getters: {
    todo: state => state.todoCards,
    inProgress: state => state.inProgressCards,
    completed: state => state.completedCards,
    isLoggedIn: state => state.isLoggedIn

  },
  modules: {},
});