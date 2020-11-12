<template>
  <nuxt-link :to="`/players/${player.id}`" class="flex flex-row sm:flex-col items-center sm:items-start w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 md:mt-4 p-6 no-underline text-black" activeClass="text-darker-indigo">
    <div class="w-1/2 sm:w-full relative pb-11/12">
      <img class="absolute h-full w-full object-cover hover:brighter hover:translate-y-1 transition-transform" :src="player.image && player.image[0].url || getAvatar(player.id)" :alt="player.name">
    </div>
    <div class="w-1/2 sm:w-full sm:flex sm:justify-center sm:flex-wrap text-center">
      <p class="text-sm my-2 font-bold sm:flex-none sm:w-full">{{ player.name }}</p>
      <label v-if="player.draftPool === 'yes'" class="inline-block sm:flex-none rounded-full bg-indigo-light text-white px-2 py-1 text-xs">{{ player.team.name || '未分隊' }}</label>
      <label v-else class="inline-block sm:flex-none rounded-full bg-grey-darker text-white px-2 py-1 text-xs">自由球員</label>
    </div>
  </nuxt-link>
</template>

<script>
import { AvatarGenerator } from 'random-avatar-generator';
const generator = new AvatarGenerator();
export default {
  props: {
    player: Object
  },
  methods: {
    getAvatar(seed) {
      return generator.generateRandomAvatar(seed);
    }
  }
}
</script>