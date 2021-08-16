<template>
    <v-card
      :id="item.id"
       class="todo-item">
        <v-card-text class="card-text">
           <h3><input :placeholder="item.title"/><v-icon class="icon">mdi-paperclip</v-icon> </h3>   
        </v-card-text>
        <v-card-text class="card-text">
           <input :placeholder="item.text"/>   
        </v-card-text>
        
        <v-card-actions>
            <v-btn
            text
            color="deep-purple accent-4"
            >
              Learn More
           </v-btn>
           <v-icon  @click="removeData('item')">mdi-delete</v-icon>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["item","id"],
    methods: {

    removeData(card){
      this.$store.dispatch("removeFromList", {cardInfo: card, status: this.id})
      console.log(card)
    },  

    }

}
</script>

<style lang="scss">
.todo-item{
    border: 1px solid #EEE;
    margin-bottom: 15px;
}
.todo-item:hover{
    cursor: move;
}

</style>