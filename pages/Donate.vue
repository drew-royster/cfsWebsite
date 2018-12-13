<template>
  <v-dialog
    v-model="donatePopup"
    width="500"
    >
    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        Can you help keep this going?
      </v-card-title>
        <v-layout row align-center justify-center>
          <v-flex sm6 xs12>
              <v-avatar size="200px">
              <v-img max-width="200px" max-height="200px" :src="drew_face"></v-img>
            </v-avatar>
          </v-flex>
          <v-flex sm6 xs12>
            <v-card-text>
              <p>
                Thanks for downloading my App!
              </p>
              <br>
              <p>
                I'm a fellow student who quit his job to work exclusively on this app. If you could slap me a buck I'd greatly appreciate it! If not, no sweat, just tell ALL your friends about the App. I mean all of them.
              </p>
              <br>
              <p>
                Your grandma should know about it.
              </p>
            </v-card-text>
          </v-flex>
        </v-layout>

      <v-divider></v-divider>
      <v-layout row justify-center align-center>
        <v-card-actions>
          <v-spacer></v-spacer>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="hosted_button_id" value="5S3L75ZCRWX6N">
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
          </form>
        </v-card-actions>

      </v-layout>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "Donate",
  computed: {
    drew_face: function() {
      return require('@/assets/drew.jpg');
    },
    donatePopup: {
      get: function() {
        return this.$store.getters.donatePopup;
      },
      set: function() {
        this.$store.dispatch('togglePopup');
      },
    }
  },
}
</script>
