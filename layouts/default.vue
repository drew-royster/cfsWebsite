<template>
  <div id="app">
    <v-app>
      <v-toolbar>
        <img src="@/assets/logo.png" alt="logo" height="50px">
        <v-toolbar-title>
          <v-btn flat to="/" exact>
            <h1>Canvas File Sync</h1>
          </v-btn>  
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn style="color:black" flat href="https://drewroyster.com">Author</v-btn>
          <v-btn style="color:black" flat href="https://github.com/drew-royster/canvasFileSync">Code</v-btn>
          <v-btn style="color:black" flat to="/faq">FAQ</v-btn>
          <v-btn style="color:black" flat @click="togglePopup()">Donate</v-btn>
          <v-btn style="color:black" flat to="/contact">Contact</v-btn>
          <!-- <v-btn flat to="/">Home</v-btn>
          <v-btn flat to="/about">About</v-btn> -->
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <nuxt/>
      </v-content>
      <v-footer mt-5>
        <v-spacer></v-spacer>
        <v-flex
          py-3
          text-xs-center
          xs12
        >CANVAS FILE SYNC &copy; {{ new Date().getFullYear() }}</v-flex>
      </v-footer>
    </v-app>
    <Donate/>
  </div>
</template>
<script>
import Donate from '../components/donate.vue';
export default {
  name: 'cfs',
  methods: {
    togglePopup() {
      this.$store.dispatch('togglePopup');
    }
  },
  components: {
    Donate
  }
}
</script>