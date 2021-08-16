<template>
<div class="container">
  <TodoList title="Todo List" id="todo">
    <draggable 
        :list="todoList"
        group= "todosapp"
        ghost-class= "on-drag"
        animation="400"
    >
      <TodoItem v-for="item in todoList" :key="item.id" :item="item"></TodoItem>
    </draggable>
  </TodoList>

  <TodoList title="In Progress List" id="inProgress">
    <draggable
        :list="inProgressList"
        group="todosapp"
        ghost-class="on-drag"
        animation="400"
    >
      <TodoItem v-for="item in inProgressList" :key="item.id" :item="item"></TodoItem>
    </draggable>
  </TodoList>

  <TodoList title="Completed List" id="completed">
    <draggable
        :list="completedList"
        group= "todosapp"
        ghost-class= "on-drag"
        animation="400"
    >
      <TodoItem v-for="item in completedList" :key="item.id" :item="item"></TodoItem>
    </draggable>
  </TodoList>

</div>
</template>

<script>

import TodoItem from "./TodoItem.vue"
import TodoList from "./TodoList.vue"
import draggable from "vuedraggable"

export default {
  name:"Stats",
  components:{
    TodoList,
    TodoItem,
    draggable
  },
  computed: {
    todoList: function() {return this.$store.getters.todo},
    inProgressList: function() {return this.$store.getters.inProgress},
    completedList: function() {return this.$store.getters.completed},
  },
  methods:{
    
   
  }
}
  
</script>
<style lang="scss" >
.container{
  display: flex;
  justify-content: center;
  
}

.on-drag{
  background-color:rgb(37, 0, 250);
}

</style>
