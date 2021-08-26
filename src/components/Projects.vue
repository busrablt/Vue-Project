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
            class="draggable"
            :list="todoList"
            group="todosapp"
            animation="400"
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
            :list="inProgressList"
            group="todosapp"
            animation="400"
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
            group="todosapp"
            animation="400"
          >
            <Card v-for="item in completedList" :key="item.id" :item="item" />
          </draggable>
        </v-list>
      </Board>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Board from "./Board.vue";
import Search from "./Search.vue";
import draggable from "vuedraggable";

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
  computed: {
    todoList: function () {
      return this.$store.getters.todo;
    },
    inProgressList: function () {
      return this.$store.getters.inProgress;
    },
    completedList: function () {
      return this.$store.getters.completed;
    },
    state() {
      return this.$store.state.todoCards;
    },
  },
  methods: {
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
  display: flex;
  justify-content: center;
  padding: 15px;
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
  width: 100%;
  height: 100%;
}
.search {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
