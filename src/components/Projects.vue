<template>
 <div>
   <search/>
   <v-list
       style="max-height: 500px"
       class="overflow-y-auto"
    > 
   <h2>Projects</h2> 
   
  <main class="flexbox">
    
   
    <Board id="board-1" :boardTitle=titles[0] :lastId="lastId" @updateLastId="lastId = $event"/>
  
    <Board id="board-2"  :boardTitle=titles[1]  :lastId="lastId" @updateLastId="lastId = $event"/>

    <Board id="board-3" :boardTitle=titles[2] :lastId="lastId" @updateLastId="lastId = $event"/> 
    
  </main>
 </v-list>
 </div>
</template>

<script>
import Search from "./Search.vue"
import Board from "./Board.vue"

export default {
  name:"Projects",
  data: () => ({
    lastId: 0,
    titles: ["To Do", "In Progress", "Completed"]
  }),
  components:{
    Board,
    Search,
  }
} 
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