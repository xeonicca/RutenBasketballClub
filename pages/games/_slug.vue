<template>
  <div class="flex-1 md:px-6 pt-10" id="content">
    <!-- Title -->
    <div class="px-6 md:px-0 flex justify-between items-center">
      <div>
        <h2 class="title font-normal font-bold">{{ $route.params.slug }}</h2>
        <p class="text-grey-dark mt-2">{{ thisGames.length }}場比賽</p>
      </div>
      <!-- <a class="bg-indigo-dark no-underline hover:bg-indigo-darker text-white text-sm py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none" href="https://airtable.com/shrkBQovjiTzdhqhG">新增比賽紀錄</a> -->
    </div>

    <section>
      <GameCard v-for="game, i in thisGames" :key="game.id" :game="game" :index="i" />
    </section>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import GameCard from '~/components/GameCard'


export default {
  components: {
    GameCard,
  },
  computed: {
    ...mapGetters(['gamesGroupedByDate', 'teamsGroupedById']),
    thisGames() {
      let games = this.gamesGroupedByDate[this.$route.params.slug]
      return games.map(v => {
        return {
          ...v,
          firstTeam: v.firstTeam?.length? this.teamsGroupedById[v.firstTeam[0]]: {},
          secondTeam: v.secondTeam?.length? this.teamsGroupedById[v.secondTeam[0]]: {},
          winnerTeam: v.winnerTeam?.length? this.teamsGroupedById[v.winnerTeam[0]]: {}
        }
      })
    }
  }
}
</script>