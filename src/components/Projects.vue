<template>
 <div>
   <search/>

   <h2>Projects</h2>
  <main class="flexbox">
    <Board id="board-1" @transferedCardID="changeLocation($event, todoCards)" :boardTitle=titles[0] :cardCount=todoCards.length  @getBoardTitle="addCard($event, {title: 'Başlık', text: 'Text'})" >
      <Card v-for="(item, index) in todoCards" :key="index" :id="item.id" draggable="true"/>
    </Board>
  
    <Board id="board-2"  @transferedCardID="changeLocation($event, inProgressCards)" :boardTitle=titles[1] :cardCount=inProgressCards.length @getBoardTitle="addCard($event, {title: 'Başlık', text: 'Text'})">
      <Card v-for="(item, index) in inProgressCards" :key="index" :id="item.id" draggable="true"/>
    </Board>

    <Board id="board-3" @transferedCardID="changeLocation($event, completedCards)" :boardTitle=titles[2] :cardCount=completedCards.length @getBoardTitle="addCard($event, {title: 'Başlık', text: 'Text'})"> 
      <Card v-for="(item, index) in completedCards" :key="index" :id="item.id" draggable="true"/>
    </Board>
  </main>
 </div>
</template>

<script>
import Search from "./Search.vue"
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
    Card,
    Search,
  },
  methods:{
    changeLocation(cardId, cardInfoArray) {
      let findFunction = (info) => {
         if (cardId ==info.id) 
           return true
        }
      var selectedInfo 
      // Seçilen info'nun nereden geldiğini anlamak için if'lerle kontrol ediyoruz
      if(this.todoCards.length != 0) {
        selectedInfo = this.todoCards.find(findFunction) // Aradığımız id'deki objeyi bulduktan sonra bunu değişkene atıyoruz
        this.todoCards.splice(this.todoCards.indexOf(selectedInfo), 1) // kaynak diziden seçtiğimiz elementin endeksini bulup siliyoruz
      }
      if(this.completedCards.length != 0) {
        selectedInfo = this.completedCards.find(findFunction)
        this.completedCards.splice(this.completedCards.indexOf(selectedInfo), 1)
      }
      if(this.inProgressCards.length != 0) {
        selectedInfo = this.inProgressCards.find(findFunction)
        this.inProgressCards.splice(this.inProgressCards.indexOf(selectedInfo), 1)
      }
      cardInfoArray.push(selectedInfo) // ilgili board'un array'ine seçtiğimiz kart bilgilerini kaydediyoruz
    },
  
    addCard(boardName, data) {
      let newData = {id: this.lastId, title: data.title, text: data.text}
      let varArray = [this.todoCards, this.inProgressCards, this.completedCards]
      var global = this
      varArray.forEach(function(variable, index) {
        if (boardName == global.titles[index]) {
        variable.push(newData)
        global.lastId += 1
      }
      })

    }
  }} 
</script>

<style lang="scss" >
h2{
  padding: 15px;
}

.flexbox{
  display: flex;
  justify-content: space-between;
  max-height: 100em;
  min-height: 18em;
  width: 100%;
  overflow: hidden;
  margin-right: 0 auto;
  padding: 15px;
}
</style>