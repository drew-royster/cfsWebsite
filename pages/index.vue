<template>
  <v-content>
    <section>
      <v-parallax height="800" :src="parallax_image">
        <v-layout
          align-center
          justify-center
          column
          >
            <v-card class="transparent">
              <v-layout pa-3>
                <h1 class="display-1 font-weight-thin mb-3"><strong>ALL YOUR FILES - ALL IN ONE PLACE - ALL THE TIME</strong></h1>
              </v-layout>
              <v-layout v-if="downloadLinkLoaded" row align-center>
                <v-flex class="text-section text-xs-center">
                  <h1 class="display-2">Get Beta</h1>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex mb-3>
                    <div v-if="enabled===0">
                      <v-layout row align-center>
                        <v-flex class="text-xs-center">
                          <v-btn 
                            class="huge-button"
                            @click="downloadApp(0)"
                            :href="macDownloadLink"
                            round
                          >
                            {{ versions[0].name}}
                          </v-btn>          
                        </v-flex>
                      </v-layout>
                      <v-layout row align-center>
                        <v-flex class="text-xs-center">
                          <p class="caption">
                            <a @click="switchVersion" href="#">
                              {{ versions[0].changePrompt }}
                            </a>
                          </p>
                        </v-flex>
                      </v-layout>
                    </div>
                    <div v-else>
                      <v-layout row align-center>
                        <v-flex class="text-xs-center">
                          <v-btn 
                            class="huge-button"
                            @click="downloadApp(1)"
                            :href="winDownloadLink"
                            round
                          >
                          {{ versions[1].name}}
                          </v-btn>          
                        </v-flex>
                      </v-layout>
                      <v-layout row align-center>
                        <v-flex class="text-xs-center">
                          <p class="caption">
                            <a @click="switchVersion" href="#">
                              {{ versions[1].changePrompt }}
                            </a>
                          </p>
                        </v-flex>
                      </v-layout>
                    </div>
                </v-flex>
              </v-layout>
            </v-card>
        </v-layout>
      </v-parallax>
    </section>
    <Donate/>
  </v-content>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import Donate from './Donate.vue';
import axios from 'axios';
const platform = require('platform');

export default {
  name: 'index',
  data() {
    return {
      downloadLinkLoaded: false,
      donatePopup: false,
      enabled: 0,
      winDownloadLink: null,
      macDownloadLink: null,
      versions: [
        {
          name: 'Mac',
          url: 'https://s3.amazonaws.com/canvas-file-sync/Canvas+File+Sync.app.zip',
          changePrompt: 'I\'m using Windows!'
        },
        {
          name: 'Windows',
          url: 'https://s3.amazonaws.com/canvas-file-sync/Canvas+File+SyncSetup.exe',
          changePrompt: 'I\'m using Mac!'
        }
      ],
    }
  },
  props: {
    msg: String
  },
  components: {
    VueMarkdown,
    Donate,
  },
  computed: {
    parallax_image: function() {
      return require('@/assets/rock.jpg');
    },
  },
  methods: {
    track (url) {
      console.log(url);
      this.$ga.event({
        eventCategory: 'outbound',
        eventAction: 'click',
        eventLabel: url,
        eventValue: 123
      })
    },
    downloadApp (version) {
      if (version === 0) {
        this.track(this.macDownloadLink);
      } else {
        this.track(this.winDownloadLink);
      }
      this.$store.dispatch('togglePopup');
    },
    switchVersion () {
      if (this.enabled) {
        this.enabled = 0;
      } else {
        this.enabled = 1;
      }
    },
  },
  mounted() {
    // eslint-disable-next-line
    if (platform.os.family.includes('Windows')) {
      this.enabled = 1;
    }

    const options = {
      uri: 'https://api.github.com/repos/drew-royster/canvasFileSync/releases/latest',
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
    };

    axios.get('https://api.github.com/repos/drew-royster/canvasFileSync/releases/latest')
      .catch((err) => {
        console.log('found error');
        console.error(err);
      })
      .then((response) => {
        response.data.assets.forEach((asset) => {
          if (asset.name.slice(-3) === 'dmg') {
            this.macDownloadLink = asset.browser_download_url;
          } else if (asset.name.slice(-3) === 'exe') {
            this.winDownloadLink = asset.browser_download_url;
          }
          if (this.winDownloadLink !== null &&
                this.macDownloadLink !== null) {
            this.downloadLinkLoaded = true;
          }
        });
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.huge-button {
  min-width: 250px;
  min-height: 50px;
  font-size: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.transparent {
   background-color: white!important;
   opacity: 0.85;
   border-color: transparent!important;
 }
</style>
