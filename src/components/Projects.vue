<template>
 <div>
   <h1>Projects</h1>
  <main class="flexbox">
    <Board id="board-1" :boardTitle=titles[0]   @getBoardTitle="addCard($event, {title: 'Başlık', text: 'Text'})" >
      <Card v-for="(item, index) in todoCards" :key="index" :id="item.id" draggable="true"/>
    </Board>
  
    <Board id="board-2" :boardTitle=titles[1] @getBoardTitle="addCard($event, {title: 'Başlık', text: 'Text'})">
      <Card v-for="(item, index) in inProgressCards" :key="index" :id="item.id" draggable="true"/>
    </Board>

    <Board id="board-3" :boardTitle=titles[2] @getBoardTitle="addCard($event, {title: 'Başlık', text: 'Text'})"> 
      <Card v-for="(item, index) in completedCards" :key="index" :id="item.id" draggable="true"/>
    </Board>
  </main>
 </div>
</template>

<script>
import Card from "./Card.vue"
import Board from "./Board.vue"
export default {
  name:"Projects",
  data: () => ({
    todoCards: [],
    inProgressCards: [],
    completedCards: [],
    lastId: 0,
    titles: ["To Do", "In Progress", "Completed"]
  }),
  components:{
    Board,
    Card
  },
  methods:{
    addCard(boardName, data) {
      let newData = {id: this.lastId, title: data.title, text: data.text}
      if (boardName == this.titles[0]) {
        this.todoCards.push(newData)
        this.lastId += 1
      } else if (boardName == this.titles[1]) {
        this.inProgressCards.push(newData)
        this.lastId += 1
      } else if (boardName == this.titles[2]) {
        this.completedCards.push(newData)
        this.lastId += 1
      }
    }
  }} 
</script>

<style lang="scss" >
.flexbox{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-right: 0 auto;
  padding: 15px;
}
</style>