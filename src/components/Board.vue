<template>
  <div :id="id"
       class="board"
       @dragover.prevent
       @drop.prevent ="drop">
       <h4 class="mt-2">{{boardTitle}} {{cardInfos.length}}</h4>
      <!-- TODO Aşağıdaki butonu board'un dışına taşı. (Bir bug'a sebep oluyor) -->
      <div  class="sheet"> 
        <v-icon  @click="addCardInfo({id:lastId,  title: 'Title ' + lastId, text: 'Text'})">
        mdi-plus-thick</v-icon> 
      </div>

      <Card v-for="info in cardInfos" :key="info.id" :info="info" draggable="true"/>
      
    <!-- FIXME Bir kart taşındıktan sonra aynısından bir tane daha oluşuyor -->
  </div>
</template>

<script>
import Card from "./Card.vue"

export default {
    name:"Board",
    components:{
    Card
    },
    props: {
      id: String,
      boardTitle: String,
      lastId: Number,
      sourceBoardId: String
    },
    data: () => ({
      cardInfos: []
      
    }),
    watch: {
      sourceBoardId(updated) {
        if(updated != "" || updated != undefined) {
          // TODO removeInfo metodunun parametresini değişken hale getir. (Taşınan kartın id'sini ver)
          this.removeInfo(0)
        }
      }
    },
    methods:{
      drop(e) {
        const cardInfo = JSON.parse(e.dataTransfer.getData('card_info'))
        const sourceBoardID = e.dataTransfer.getData('source_board_id')
        this.$emit("findSourceBoard", sourceBoardID)   
        this.cardInfos.push(cardInfo)
        const card_id = cardInfo.id
        const card = document.getElementById(card_id)
        card.style.display = "block"
        e.target.appendChild(card)
        this.$emit("transferedCardID", card_id)

      },
      removeInfo(cardId) {
        if(this.sourceBoardId == this.id) {
          console.log(this.id,cardId)
          let selectedInfo = this.cardInfos.find((info) => cardId == info.id)
          this.cardInfos.splice(this.cardInfos.findIndex((element) => element == selectedInfo), 1)
        }
      },
      addCardInfo(data) {
        let newData = {id: this.lastId, title: data.title, text: data.text}
        this.$emit("updateLastId", this.lastId + 1)
        this.cardInfos.push(newData)
      }
    }
}
</script>
<style lang="scss" >
h4{
  padding-left: 8px;
}
.board{
  display: flex;
  flex-direction: column;
  background:rgba(201, 201, 241, 0.1);
  width: 100%;
  max-width: 250px;
 
}
.sheet{
  display: flex;
  justify-content: center;
  height: 50px;
  max-width: 250px;
  margin: 10px ;
  background-color: rgba(184, 184, 243, 0.1);  
}
</style>