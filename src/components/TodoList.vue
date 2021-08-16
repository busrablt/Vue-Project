<template>
  <div class="todo-list">
      <div class="title">
          {{title}}
      </div>
        <div class="sheet"> 
          <v-icon  @click="addData">mdi-plus-thick</v-icon>
        </div>
        
      <slot></slot>

  </div>
</template>

<script>
export default {
    name: "TodoList",
    props: ["title", "id"],
    methods: {
    addData() {
      this.$store.dispatch("addToList", { // FIXME Math random metodu yerine id oluşturan bir paket kullan
          cardInfo: {id:Math.floor(Math.random() * 100), title:"Title", text:"Text"}, 
      status: this.id
      })
    },  

    }

}
</script>

<style lang="scss">
.todo-list{
    display: flex;
    flex-direction: column;
    background:rgba(201, 201, 241, 0.1);
    width: 100%;
    max-width: 300px;
    margin: 0 15px;

}
.title{
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
    
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