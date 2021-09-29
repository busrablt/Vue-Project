<template>
  <div class="board">
    <div class="board__title">
      {{ title }}
      <p>{{ count }}</p>
    </div>
    <div class="board__sheet">
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
    makeId(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    addData() {
      this.$store.dispatch("addToBoard", {
        cardInfo: {
          id: this.makeId(10),
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
  @media only screen and(max-width:500px) {
    max-width: 80px;
    margin: 0 10px;
  }
  @media only screen and(min-width:500px) and(max-width:600px) {
    max-width: 100px;
    margin: 0 10px;
  }
  @media only screen and(min-width:600px) and(max-width:650px) {
    max-width: 120px;
    margin: 0 10px;
  }

  @media only screen and(min-width:650px) and(max-width:700px) {
    max-width: 140px;
    margin: 0 10px;
  }
  @media only screen and(min-width:700px) and(max-width:760px) {
    max-width: 160px;
    margin: 0 10px;
  }
  @media screen and(min-width:760px) and(max-width:800px) {
    max-width: 180px;
    margin: 0 10px;
  }
  @media screen and(min-width:800px) and(max-width:1024px) {
    max-width: 250px;
    margin: 0 10px;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    @media screen and(max-width:768px) {
      padding: 3px 12px;
      font-size: 12px;
      max-height: 24px;
    }
  }
  &__sheet {
    display: flex;
    justify-content: center;
    height: 3em;
    max-width: 20em;
    margin: 1em;
    background-color: rgba(184, 184, 243, 0.1);
    @media screen and(max-width:768px) {
      max-width: 5em;
      height: 2em;
      margin: 5px auto;
    }
    @media only screen and(max-width:500px) {
      max-width: 5em;
      height: 1.5em;
      margin: 5px auto;
    }

    @media only screen and(min-width:700px) and(max-width:760px) {
      max-width: 8em;
      height: 2em;
    }
    @media screen and(min-width:760px) and(max-width:800px) {
      max-width: 10em;
      height: 2em;
    }
  }
}
</style>