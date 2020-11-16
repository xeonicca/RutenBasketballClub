<template>
  <vs-card class="flex flex-row sm:flex-col items-center sm:items-start w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 md:mt-4 sm:p-2 no-underline text-black">
    <template #title>
      <h3 class="mt-2 font-bold">{{ player.name }}</h3>
    </template>
    <template #img>
      <nuxt-link class="w-1/2 sm:w-full relative pb-11/12" :to="`/players/${player.name}`">
        <img class="absolute h-full w-full object-cover hover:brighter hover:translate-y-1 transition-transform" :src="player.image && player.image[0].url || getAvatar(player.id)" :alt="player.name">
      </nuxt-link>
    </template>
    <template #text>
      <p></p>
    </template>
    <template #interactions>
      <label v-if="player.draftPool === 'yes'" class="inline-block sm:flex-none rounded-full bg-indigo-light text-white px-2 py-1 text-xs">{{ tagText }}</label>
      <label v-else class="inline-block sm:flex-none rounded-full bg-grey-darker text-white px-2 py-1 text-xs">自由球員</label>
    </template>
  </vs-card>
</template>

<script>
import { AvatarGenerator } from 'random-avatar-generator';
const generator = new AvatarGenerator();
export default {
  props: {
    player: Object,
    isCaptain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tagText() {
      if(this.player.draftPool === 'yes') {
        if(this.isCaptain) {
          return 'Team GM'
        } else {
          return this.player.teamDetail.name
        }
      }
      return '未分隊'
    }
  },
  methods: {
    getAvatar(seed) {
      return generator.generateRandomAvatar(seed);
    }
  }
}
</script>