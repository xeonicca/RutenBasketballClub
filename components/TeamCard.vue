<template>
<nuxt-link class="max-w-sm w-full sm:w-1/2 lg:w-1/5 py-6 px-3 block" :to="`/teams/${team.id}`">
  <div class="bg-white shadow-xl rounded-lg overflow-hidden">
    <div class="bg-cover bg-no-repeat bg-center h-56 p-4" :style="`background-image: url(${imageUrl})`">
    </div>
    <div class="p-4">
      <p class="uppercase tracking-wide text-sm font-bold text-indigo mb-1">{{ team.name }}</p>
      <p class="mt-1 font-bold text-3xl text-gray-900">{{ team.shortName }}</p>
    </div>
    <div class="flex p-4 border-t border-gray-300 text-gray-700">
      <div class="flex-1 inline-flex items-center">
        <p><span class="text-gray-900 font-bold">{{ team.ofPlayers + 1 }}</span> 名球員</p>
      </div>
      <div class="flex-1 inline-flex items-center">

        <p><span class="text-gray-900 font-bold">{{ team.wonGamesCount }}</span> 勝</p>
      </div>
    </div>
    <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
      <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">GM</div>
      <div class="flex items-center pt-2">
        <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" :style="`background-image: url(${captainImageUrl})`">
        </div>
        <div>
          <p class="font-bold text-gray-900">{{ captain.name }}</p>
        </div>
      </div>
    </div>
  </div>
</nuxt-link>
</template>

<script>
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();
export default {
  props: {
    teamObject: Object
  },
  data() {
    let team = this.$createModel('Team', this.teamObject)
    return {
      team: team,
      imageUrl: team.getImageUrl(),
      captain: {},
      captainImageUrl: null
    }
  },
  methods: {
    getAvatar(seed) {
      return generator.generateRandomAvatar(seed);
    }
  },

  async fetch() {
    let captain = await this.team.getCaptain() || {}
    this.captain = this.$createModel('Player', captain)
    this.captainImageUrl = this.captain.getImageUrl()
  }
}
</script>