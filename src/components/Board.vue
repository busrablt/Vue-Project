<template>
  <div class="board">
    <div class="title">
      {{ title }}
      <p>{{ count }}</p>
    </div>
    <div class="sheet">
      <v-icon @click="addData" color="rgb(9, 9, 196, 0.4)"
        >mdi-plus-thick</v-icon
      >
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Board",
  props: ["title", "id", "count"],
  methods: {
    addData() {
      this.$store.dispatch("addToBoard", {
        // FIXME Math random metodu yerine id oluşturan bir paket kullan
        cardInfo: {
          id: Math.floor(Math.random() * 100),
          title: "Title",
          text: "Text",
        },
        status: this.id,
      });
    },
  },
};
</script>

<style lang="scss">
.board {
  background: rgba(201, 201, 241, 0.1);
  width: 100%;
  max-width: 300px;
  margin: 0 15px;
  border-radius: 1em;
}
.title {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 100;
  margin-bottom: 10px;
}

.sheet {
  display: flex;
  justify-content: center;
  height: 3em;
  max-width: 20em;
  margin: 1em;
  background-color: rgba(184, 184, 243, 0.1);
}
</style>
