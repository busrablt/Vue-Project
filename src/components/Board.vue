<template>
  <div :id="id"
       class="board"
       @dragover.prevent
       @drop.prevent ="drop">
       <h4 class="mt-2">{{boardTitle}}</h4>

      <div  class="sheet">
        <v-icon  @click="getBoardTitle">
        mdi-plus-thick</v-icon> 
      </div>

       <slot/>

  </div>
</template>

<script>
export default {
    name:"Board",
    props:['id','boardTitle'],
    methods:{
      drop: e => {
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.display ="block";
        e.target.appendChild(card);
      },
      getBoardTitle() {
        this.$emit("getBoardTitle", this.boardTitle)
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
  min-height: 40vh;
 
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