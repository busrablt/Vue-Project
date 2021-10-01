<template>
  <div fluid class="dropdown">
    <v-row>
      <v-col class="d-flex">
        <v-select
          :items="items"
          v-model="selected"
          v-on:change="selectedToParent"
          label="Select Board Name"
          dense
          solo
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data: () => ({
    selected: "",
  }),
  created() {
    this.items.unshift("All boards");
  },
  methods: {
    selectedToParent() {
      console.log(this.selected);
      this.$emit("selected", this.selected);
    },
  },
};
</script>
<style lang="scss">
.dropdown {
  width: 20em;
  margin-right: 2em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
  @media only screen and(max-width:768px) {
    width: 10em;
  }
}
</style>
