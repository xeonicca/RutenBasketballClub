<template>
  <div class="flex flex-1 flex-col md:px-6 pt-10" id="content">
    <!-- Title -->
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <div>
        <h2 class="font-normal font-bold">全部成員</h2>
        <p class="text-grey-dark mt-2">{{ players.length }}員</p>
      </div>
    </div>

    <!-- Library -->
    <div class="hidden px-2 pt-2 md:px-0 flex-wrap order-2 pb-8 js-tab-pane active" id="section-library">
      <nuxt-link v-for="p in playersWithTeam" :to="`/players/${p.id}`" class="flex flex-row sm:flex-col items-center sm:items-start w-1/2 sm:w-1/3 md:w-1/5 p-4 no-underline text-black" activeClass="text-darker-indigo" :key="p.id">
        <img :src="getAvatar(p.id)" alt="book-01" class="w-1/3 sm:w-full transition-normal hover:brighter hover:translate-y-1 hover:border-indigo">
        <div class="ml-3 sm:ml-0 w-2/3 sm:w-full sm:w-full sm:flex sm:justify-center sm:flex-wrap">
          <p class="text-sm my-2 font-bold text-left sm:text-center sm:flex-none sm:w-full">{{ p.name }}</p>
          <label class="inline-block sm:flex-none rounded-full bg-indigo-light text-white px-2 py-1/2 text-xs">{{ p.team.name || '' }}</label>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

export default {
  computed: {
    ...mapState(['players']),
    ...mapGetters(['teamsGroupedById']),
    playersWithTeam() {
      return this.players.map(v => {
        return {
          ...v,
          team: v.team?.length? this.teamsGroupedById[v.team[0]]: {}
        }
      })
    }
  },

  methods: {
    getAvatar(seed) {
      return generator.generateRandomAvatar(seed);
    }
  }
}
</script>