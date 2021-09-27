<template>
  <v-card :id="item.id" class="card">
    <v-card-text class="card__text">
      <h3>
        <input
          :placeholder="item.title"
          v-model="item.title"
          @blur="updateData"
        />
      </h3>
    </v-card-text>
    <v-card-text class="card__text">
      <input
        class="card__input"
        :placeholder="item.text"
        v-model="item.text"
        @blur="updateData"
      />
    </v-card-text>

    <v-card-actions>
      <v-row justify="start">
        <v-btn text color="rgb(9, 9, 196, 0.6)" @click.stop="dialog = true">
          Open Card
        </v-btn>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-textarea name="input-7-1" v-model="item.text"></v-textarea>
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
      <v-icon @click="removeData">mdi-delete</v-icon>
    </v-card-actions>
  </v-card>
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
  margin-bottom: 15px;
  &:hover {
    cursor: move;
  }
  &__input {
    width: 20em;
  }
  &__text {
    display: flex;
  }
}
</style>
