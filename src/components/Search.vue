<template>
  <v-container fluid class="dropdown">
    <v-row >
      <v-col class="d-flex" >
        <v-select :items="items" v-model="selected"  v-on:change="selectedToParent"
         label="Select Board Name" dense solo></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["items"],
  data: () => ({
    selected: ""
  }),
  created() {
    this.items.unshift("All boards")
  },
  methods:{
    selectedToParent(){
      console.log(this.selected)
      this.$emit("selected",this.selected)
    }
  }
};
</script>
<style lang="scss">
.dropdown{
  width: 20em;
}

</style>
