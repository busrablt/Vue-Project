<template>
  <div>
    <v-card
        :id="info.id"
        class="card"
        :draggable="draggable" 
        @dragstart="dragStart"
        @dragover.stop>

        <v-card-text class="card-text">
           <h3><input :placeholder="info.title"/><v-icon class="icon">mdi-paperclip</v-icon> </h3>   
        </v-card-text>
        <v-card-text class="card-text">
           <input :placeholder="info.text"/>   
        </v-card-text>


        <v-card-actions>
            <v-btn
            text
            color="deep-purple accent-4"
            >
              Learn More
           </v-btn>
        </v-card-actions>
    </v-card>

  </div>
</template>

<script>
export default {
    name:"Card",
    props:['draggable', 'info'],
    methods:{
      dragStart(e) {
        const target = e.target
        var stringInfo = JSON.stringify(this.info)
        e.dataTransfer.setData('source_board_id', this.$parent.id)
        e.dataTransfer.setData('card_info', stringInfo)
        setTimeout(() => {target.style.display= "none" }, 0)
      }
    },
  
}
</script>
<style lang="scss">
 .card{
  display: flex;
  flex-direction: column;
  width: 280px;
  cursor: pointer;
  margin-bottom: 15px;
}


</style>