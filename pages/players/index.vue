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
    <div class="flex px-2 pt-2 md:px-0 flex-wrap order-2 pb-8" id="section-library">
      <PlayerCard v-for="p in players" :key="p.id" :playerObject="p" />
    </div>
  </div>
</template>
<script>
import PlayerCard from '~/components/PlayerCard'

export default {
  components: {
    PlayerCard
  },

  async asyncData(context) {
    let players = await context.store.dispatch('Player/fetch')

    // fetch all teams so each component dont need fetch again
    let teams = await context.store.dispatch('Team/fetch')

    return {
      players,
      teams
    }
  }
}
</script>