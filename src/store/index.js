import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoCards: [],
    inProgressCards: [],
    completedCards : []
  },
  mutations: {
    addToList(state, payload){ // payload: {cardInfo, status}
      switch (payload.status) {
        case "todo":
          state.todoCards.push(payload.cardInfo)
          break;
        case "inProgress":
          state.inProgressCards.push(payload.cardInfo)
          break;
        case "completed":
          state.completedCards.push(payload.cardInfo)
          break;
      
        default:
          console.error("Unexpected board status!")
          break;
      }
    },

    removeFromList(state, payload) { 
      let selectedArray;
      switch (payload.status) {
        case "todo":
          selectedArray = state.todoCards
          break;
        case "inProgress":
           selectedArray = state.inProgressCards
          break;
        case "completed":
           selectedArray = state.completedCards
          break;
      
        default:
          console.error("Unexpected board status!")
          break;
      }
      let itemIndex = this.selectedArray.findIndex((card) => card == payload.cardInfo)
      selectedArray.splice(itemIndex, 1)
    }

  },
  actions: {
    addToList({ commit }, payload) {
      commit("addToList", payload)
    },
    removeFromList({ commit }, payload) {
      commit("removeFromList", payload)
    },

    moveObject({ commit }, payload, nextStatus) {
      commit("removeFromList", payload)
      payload.status = nextStatus
      commit("addToList", payload)
    }
  },
  getters: {
    todo: state => state.todoCards,
    inProgress: state => state.inProgressCards,
    completed: state => state.completedCards,

  },
  modules: {},
});
