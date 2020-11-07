<template>
  <nuxt-link :to="`/players/${player.id}`" class="flex flex-row sm:flex-col items-center sm:items-start w-1/2 sm:w-1/3 md:w-1/5 p-4 no-underline text-black" activeClass="text-darker-indigo">
    <img :src="getAvatar(player.id)" alt="book-01" class="w-1/3 sm:w-full transition-normal hover:brighter hover:translate-y-1 hover:border-indigo">
    <div class="ml-3 sm:ml-0 w-2/3 sm:w-full sm:w-full sm:flex sm:justify-center sm:flex-wrap">
      <p class="text-sm my-2 font-bold text-left sm:text-center sm:flex-none sm:w-full">{{ player.name }}</p>
      <label class="inline-block sm:flex-none rounded-full bg-indigo-light text-white px-2 py-1/2 text-xs">{{ player.team.name || '' }}</label>
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