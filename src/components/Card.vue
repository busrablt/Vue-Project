<template>
    <v-card
      :id="item.id"
       class="card">
        <v-card-text class="card-text">
           <h3><input :placeholder="item.title" v-model="item.title" @blur="updateData"/><v-icon class="icon">mdi-paperclip</v-icon> </h3>   
        </v-card-text>
        <v-card-text class="card-text">
           <input :placeholder="item.text" v-model="item.text"  @blur="updateData"/>   
        </v-card-text>
        
        <v-card-actions >
            <CardText/>
           <v-icon  @click="removeData">mdi-delete</v-icon>
        </v-card-actions>
    </v-card>
</template>

<script>
import CardText from "./CardText.vue"
export default {
    name: "Card",
    components: {
        CardText,

    },
    props: ["item"],
    methods: {
        updateData() {
            let statusName = this.$parent.$parent.$parent.id
            this.$store.dispatch("updateCardInfo", {cardInfo: this.item, status: statusName})
        },
        removeData() {
            let statusName = this.$parent.$parent.$parent.id
            this.$store.dispatch("removeFromBoard", {cardInfo: this.item, status: statusName})
        },  

    }

}
</script>

<style lang="scss">
.card{
    border: 1px solid #EEE;
    margin-bottom: 15px;
}
.card:hover{
    cursor: move;
}


</style>