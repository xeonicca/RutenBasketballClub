<template>
<div class="flex flex-1 flex-wrap md:px-6 pt-10" id="content">
  <div class="w-full md:w-1/2 px-6 pt-6 md:-order-1">
    <div class="flex items-center" v-for="team, i in teams">
      <div class="" style="width: 50px">
        <vs-avatar dark :key="team.id" class="my-2">
          <template #text>
            {{ team.shortName }}
          </template>
        </vs-avatar>
      </div>
      <div class="flex flex-1 px-4">
        <label v-for="x in 5" class="inline-flex items-center ml-2">
          <input type="radio" class="form-radio h-5 w-5 text-indigo-600" @input="checkDuplicate(x, i)" :name="`${team.id}`" v-model="selected[i]" :value="x"><span class="px-1 text-gray-700">{{x}}</span>
        </label>
      </div>
    </div>
    <div class="mt-4"><vs-button class="ml-0 w-full sm:w-auto" primary @click="clearAll">Clear</vs-button></div>
  </div>
  <div class="w-full md:w-1/2 px-4 -order-1">
    <div class="p-6 bg-white" ref="captureArea">
      <table class="table-auto w-full">
        <thead class="p-2 text-sm leading-loose border-b text-indigo">
          <tr>
            <th>Home</th>
            <th>Away</th>
          </tr>
        </thead>
        <tbody class="p-2">
          <tr v-for="(tr, i) in teamMatchups" class="border-b">
            <td class="py-2 font-medium">
              <vs-button class="inline-block"
                circle
                icon
                primary
              >{{ tr[0].teamSetup }}</vs-button>
              <span class="ml-2">{{ tr[0].team && tr[0].team.shortName }}</span>
            </td>
            <td class="py-2 font-medium">
              <vs-button class="inline-block"
                circle
                icon
                danger
              >{{ tr[1].teamSetup }}</vs-button>
              <span class="ml-2">{{ tr[1].team && tr[1].team.shortName }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-4"><vs-button class="ml-0 w-full sm:w-auto" primary @click="capture">Screenshot</vs-button></div>
  </div>

  <vs-dialog auto-width not-padding v-model="active">
    <div id="matchupImage"></div>
  </vs-dialog>
</div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  data() {
    return {
      matchups: [
        [2,5],
        [3,4],
        [5,1],
        [3,2],
        [1,4],
        [5,3],
        [2,4],
        [3,1],
        [4,5],
        [1,2]
      ],

      selected: new Array(5),
      active: false
    }
  },

  computed: {
    teamMatchups() {
      return this.matchups.map(v => {
        return [
          {
            teamSetup: v[0],
            team: this.selected.indexOf(v[0]) !== -1? this.teams[this.selected.indexOf(v[0])] : null
          },
           {
            teamSetup: v[1],
            team: this.selected.indexOf(v[1]) !== -1? this.teams[this.selected.indexOf(v[1])] : null
          }
        ]
      })
    }
  },

  methods: {
    checkDuplicate(value, teamIndex) {
      // console.log(value, teamIndex)
      this.selected[teamIndex] = value
      this.selected.forEach((v,i) => {
        if(i !== teamIndex && value === v) {
          console.log(v, i)
          this.selected[i] = null
        }
      })
    },

    capture() {
      this.active = true
      html2canvas(this.$refs.captureArea).then(function(canvas) {
        document.getElementById('matchupImage').appendChild(canvas);
      });
    },

    clearAll() {
      this.selected = new Array(5)
    }
  },

  async asyncData(context) {
    let teams = await context.store.dispatch('Team/fetch')
    return {
      teams
    }
  }
}
</script>