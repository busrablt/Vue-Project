<template>
 <div id="app">
  <v-app  id="inspire">
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            <v-card-text>
              <p>Sign in with your username and password:</p>
              <v-form>
                <v-text-field
                              outline
                              label="Username"
                              type="text"
                              v-model="username"></v-text-field>
                <v-text-field
                              outline
                              hide-details
                              label="Password"
                              type="password"
                              v-model="password"></v-text-field>
                            <v-checkbox
                                v-model="checkbox"
                                :label="'Remember Me'"
                            >
                            </v-checkbox>
              </v-form>
            </v-card-text>
            <v-card-actions >
              <v-btn color="info" flat>
                Forgot password?
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="info" >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>
</template>

<script>
export default {
   data () {
    return {
      checkbox: false,
      password: null,
      username: null
    }
  }
}
</script>