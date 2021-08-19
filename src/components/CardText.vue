<template>
  <v-row justify="start">
    <v-btn text color="deep-purple accent-4" @click.stop="dialog = true" >
      Open Card
    </v-btn>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-textarea name="input-7-1"></v-textarea>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="deep-purple accent-4" text @click="dialog = false">
            Close
          </v-btn>

          <v-btn color="deep-purple accent-4" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "CardText",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>


