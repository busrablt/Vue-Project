<template>
  <div>
    <div class="search">
      <Search :items="boardNames" @selected="selectedBoardName = $event" />
    </div>
    <h2>Projects</h2>

    <div class="board-container">
      <Board
        :title="boardNames[1]"
        id="todo"
        v-if="boardController(1)"
        :count="todoList.length"
      >
        <v-list class="overflow-y-auto" color="rgba(201, 201, 241, 0.1)">
          <draggable
            id="todo"
            class="draggable"
            :list="todoList"
            group="todosapp"
            animation="400"
            @end="onEnd"
          >
            <Card v-for="item in todoList" :key="item.id" :item="item" />
          </draggable>
        </v-list>
      </Board>

      <Board
        :title="boardNames[2]"
        id="inProgress"
        :count="inProgressList.length"
        v-if="boardController(2)"
      >
        <v-list class="overflow-y-auto" color="rgba(201, 201, 241, 0.1)">
          <draggable
            class="draggable"
            id="inProgress"
            :list="inProgressList"
            group="todosapp"
            animation="400"
            @end="onEnd"
          >
            <Card v-for="item in inProgressList" :key="item.id" :item="item" />
          </draggable>
        </v-list>
      </Board>

      <Board
        :title="boardNames[3]"
        id="completed"
        :count="completedList.length"
        v-if="boardController(3)"
      >
        <v-list
          class="overflow-y-auto"
          style="list-style"
          color="rgba(201, 201, 241, 0.1)"
        >
          <draggable
            class="draggable"
            :list="completedList"
            id="completed"
            group="todosapp"
            animation="400"
            @end="onEnd"
          >
            <Card v-for="item in completedList" :key="item.id" :item="item" />
          </draggable>
        </v-list>
      </Board>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Board from "../components/Board.vue";
import Search from "../components/Search.vue";
import draggable from "vuedraggable";
import { mapActions } from "vuex";

export default {
  name: "Projects",
  data: () => ({
    boardNames: ["To do", "In Progress", "Completed"],
    selectedBoardName: "All boards",
  }),
  components: {
    Board,
    Card,
    Search,
    draggable,
  },
  created() {
    this.bindCards();
  },
  computed: {
    todoList: function () {
      return this.$store.getters.todo.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      });
    },
    inProgressList: function () {
      return this.$store.getters.inProgress.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      });
    },
    completedList: function () {
      return this.$store.getters.completed.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      });
    },
  },
  methods: {
    ...mapActions([
      "bindTodoCards",
      "bindInProgressCards",
      "bindCompletedCards",
    ]),
    onEnd(event) {
      const from = event.target.id;
      const to = event.to.id;
      const movedCardId = event.item.id;
      if (from !== to) {
        let cardInfo;
        if (to === "todo") {
          cardInfo = this.todoList.filter((card) => card.id === movedCardId)[0];
        } else if (to === "inProgress") {
          cardInfo = this.inProgressList.filter(
            (card) => card.id === movedCardId
          )[0];
        } else if (to === "completed") {
          cardInfo = this.completedList.filter(
            (card) => card.id === movedCardId
          )[0];
        }
        this.$store.dispatch("moveCard", {
          cardInfo: cardInfo,
          status: from,
          nextStatus: to,
        });
      }
    },
    bindCards() {
      this.bindTodoCards();
      this.bindInProgressCards();
      this.bindCompletedCards();
      console.log("Card binding completed");
    },
    boardController(i) {
      return (
        this.selectedBoardName == "All boards" ||
        this.selectedBoardName == this.boardNames[i]
      );
    },
  },
};
</script>
<style lang="scss">
div.v-list {
  min-height: 8em;
  max-height: 520px;
}

.board-container {
  min-height: 640px;
  display: grid;
  grid-template-columns: repeat(3 ,1fr);
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

h2 {
  padding: 10px;
}

.on-drag {
  background-color: rgb(37, 0, 250);
}

.draggable {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.search {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
