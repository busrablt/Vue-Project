<template>
  <div>
    <Search />
    <h2>Projects</h2>

    <div class="container">
      
      <Board title="Todo List" id="todo" :count="todoList.length">
        <v-list class="overflow-y-auto" color="rgba(201, 201, 241, 0.1)">
          <draggable
            class="draggable"
            :list="todoList"
            group="todosapp"
            ghost-class="on-drag"
            animation="400"
          >
            <Card v-for="item in todoList" :key="item.id" :item="item"></Card>
          </draggable>
      </v-list>
        
      </Board>

      <Board
        title="In Progress List"
        id="inProgress"
        :count="inProgressList.length"
      >
        <v-list class="overflow-y-auto overflow-x-disabled" color="rgba(201, 201, 241, 0.1)">
          <draggable
            class="draggable"
            :list="inProgressList"
            group="todosapp"
            ghost-class="on-drag"
            animation="400"
          > 
            <Card v-for="item in inProgressList" :key="item.id" :item="item"/>
          </draggable>
        </v-list>
      </Board>

      <Board
        title="Completed List"
        id="completed"
        :count="completedList.length"
      >
        <v-list class="overflow-y-auto" color="rgba(201, 201, 241, 0.1)">
          <draggable
            class="draggable"
            :list="completedList"
            group="todosapp"
            ghost-class="on-drag"
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
  methods: {},
};
</script>
<style lang="scss">
div.v-list {
  min-height: 8em;
  max-height: 520px;
}

.container {
  display: flex;
  justify-content: center;
  padding: 15px;
}

h2{
  padding: 15px;
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
</style>