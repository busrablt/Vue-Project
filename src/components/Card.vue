<template>
  <div :id="item.id" class="card">
    <div class="card__text">
      <h3>
        <input
          class="card__input"
          :placeholder="item.title"
          v-model="item.title"
          @blur="updateData"
        />
      </h3>
    </div>
    <div class="card__text">
      <input
        class="card__input"
        :placeholder="item.text"
        v-model="item.text"
        @blur="updateData"
      />
    </div>

    <v-card-actions>
      <v-row justify="start">
        <span class="card__btn-open" text color="rgb(9, 9, 196, 0.6)" @click.stop="dialog = true">
          Open Card
        </span>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-textarea
              name="input-7-1"
              style="padding-left: 20px"
              v-model="item.text"
            ></v-textarea>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="rgb(9, 9, 196, 0.6)" text @click="dialog = false">
                Close
              </v-btn>

              <v-btn color="rgb(9, 9, 196, 0.6)" text @click="dialog = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-icon class="card__delete-icon" @click="removeData">mdi-delete</v-icon>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    updateData() {
      let statusName = this.$parent.$parent.$parent.id;
      this.$store.dispatch("updateBoard", {
        cardInfo: this.item,
        status: statusName,
      });
    },
    removeData() {
      let statusName = this.$parent.$parent.$parent.id;
      this.$store.dispatch("removeFromBoard", {
        cardId: this.item.id,
        status: statusName,
      });
    },
  },
};
</script>

<style lang="scss">
.card {
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 15px;
  height: 130px;
  width: 280px;
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  padding:6px 14px;
   @media  screen and (max-width:500px) {
     width: 73px;
     height: 80px;
    }
    @media  screen and (min-width:500px)and(max-width:600px) {
     width: 85px;
     height: 80px;
    }
    @media  screen and (min-width:600px)and(max-width:650px) {
     width: 100px;
     height: 80px;
    }
    @media  screen and (min-width:650px)and(max-width:700px) {
     width: 130px;
     height: 80px;
    }
    @media  screen and (min-width:700px)and(max-width:768px) {
     width: 150px;
     height: 80px;
    }
    @media  screen and (min-width:768px)and(max-width:960px) {
     width: 150px;
     height: 120px;
    }
    @media  screen and (min-width:960px)and(max-width:1200px) {
     width: 230px;
     height: 130px;
    }
  &:hover {
    cursor: move;
  }
  &__input {
    width: 14em;

    @media  screen and (max-width:768px) {
      width: 4em;
    }
    @media  screen and (min-width:768px) and (max-width:960px){
      width: 6em;
    }
    @media  screen and (min-width:960px) and (max-width:1200px){
      width: 10em;
    }
    
    
  } 
  &__text {
    display: flex;
    justify-content: flex-start;
    @media  screen and (max-width:768px) {
      font-size: 10px !important ;
      
    }
  
  }
  .text-area {
    padding: 20px;
  }
  &__btn-open{
    @media  screen and (max-width:768px) {
      font-size: 10px;
      
    }
  }  
  &__delete-icon{
    @media  screen and (max-width:768px) {
     font-size: 18px !important; 
    }
    
  }
}
.v-card__title {
  padding: 5px;
  @media screen and (max-width:768px) {
     padding: 4px;
  }
   
}
.v-card__actions{
  @media screen and (max-width:650px) {
    width: 58px;
    padding: 2px !important;
  }
  
 
}
</style>
