<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height header__sheet">
      <div>
        <img src="../assets/mobven.png" alt="Logo" width="150" height="50" >
      </div>
      <div class="information">
        <v-icon class="information__icon" size="20">mdi-help-circle-outline</v-icon>
        <v-icon class="information__icon" size="20">mdi-bell-outline</v-icon>
        <h class="information__icon">Deneme</h>
        <v-avatar class="mr-10 information__icon" color="grey darken-1" size="32"></v-avatar>
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "Navi",
  data: () => ({
    links: ["Profile", "Updates"],
  }),
};
</script>
<style lang="scss" scoped>
.information {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &__icon{
    margin: 0.4em;
  }
}
</style>