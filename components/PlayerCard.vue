<template>
  <vs-card class="flex flex-row sm:flex-col items-center sm:items-start w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 md:mt-4 p-2 no-underline text-black">
    <template #title>
      <h3 class="mt-2 font-bold">{{ player.name }}</h3>
    </template>
    <template #img>
      <nuxt-link class="block w-1/2 sm:w-full relative pb-11/12" :to="`/players/${player.id}`">
        <img class="absolute h-full w-full object-cover hover:brighter hover:translate-y-1 transition-transform" :src="player.imageUrl" :alt="player.name">
      </nuxt-link>
    </template>
    <template #text>
      <div class="py-2"><span class="hidden lg:inline-block mr-1 rounded-full bg-green-500 text-white px-2 py-1 text-xs" v-for="p in player.position">{{ p }}</span>&nbsp;</div>
    </template>
    <template #interactions>
      <label v-if="player.draftPool === 'yes'" class="inline-block sm:flex-none rounded-full bg-indigo-dark text-white px-2 py-1 text-xs">{{ tagText }}</label>
      <label v-else class="inline-block sm:flex-none rounded-full bg-grey-darker text-white px-2 py-1 text-xs">自由球員</label>
    </template>
  </vs-card>
</template>

<script>

export default {
  props: {
    playerObject: Object,
    isCaptain: {
      type: Boolean,
      default: false
    }
  },
  data() {
    let player = this.$createModel('Player', this.playerObject)
    return {
      player: player,
      team: {}
    }
  },
  computed: {
    tagText() {
      if(this.player.draftPool === 'yes') {
        if(this.isCaptain) {
          return 'GM'
        } else {
          return 'Team ' + this.team.shortName
        }
      }
      return '未分隊'
    }
  },

  async fetch() {
    this.team = await this.player.getTeam()
  }
}
</script>