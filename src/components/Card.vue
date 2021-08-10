<template>
  <div>
    <v-card
        :id="id"
        class="card"
        :draggable="draggable" 
        @dragstart="dragStart"
        @dragover.stop>

        <v-card-text class="card-text">
           <h3>Development<v-icon class="icon">mdi-paperclip</v-icon></h3>
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

    <slot/>

  </div>
</template>

<script>
export default {
    name:"Card",
    props:['id','draggable'],
    methods:{
       dragStart: e=>{
         const target = e.target ;
         e.dataTransfer.setData('card_id', target.id) ;
         setTimeout(() => {target.style.display= "none" }, 0);
        }},
  
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
.icon{
  margin-left: 80px;
}
</style>