<template>
  <v-content>
     <v-layout ma-3 row>
      <v-flex text-xs-center xs12 sm6 offset-sm3>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      </v-flex>
     </v-layout>
     <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="(item,i) in items"
            :key="i"
          >
            <div slot="header">{{ item.title }}</div>
            <v-card>
              <v-card-text>{{ item.text }}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
    <Donate/>
  </v-content>
</template>

<script>
import Donate from './Donate.vue';

export default {
  name: 'FAQ',
  data () {
    return {
      items: [
        {
          title: 'What does this do for me?',
          text: 'You login once, it\'ll pull in all your Canvas Course Files and then will continuously pull down new or updated ones.',
        },
        {
          title: 'Does this really sync everything for me?',
          text: 'Yes! All files you can see in Canvas will be pulled down.',
        },
        {
          title: 'How often does it check for new files and folders?',
          text: 'By default 5 minutes, but you can adjust it however you like.',
        },
        {
          title: 'Is this going to eat up my battery?',
          text: 'Power usage is extremely minimal except for the first sync, because that generally involves downloading a lot of files.',
        },
        {
          title: 'Is this secure?',
          text: 'Yes all your data is on your personal computer. All I get are the occasional crash reports if something goes wrong.',
        },
        {
          title: 'Is this really free?',
          text: 'Totally free',
        },
        {
          title: 'Are you data mining?',
          text: 'Nope. The code is open source so you can check for yourself, but the only data I\'m ever getting are crashes so I can continue to push fixes.',
        },
      ]
    }
  },
  components: {
    Donate,
  }
}
</script>
