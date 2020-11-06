<template>
  <div class="flex flex-1 flex-col md:px-6 pt-10" id="content">
    <!-- Title -->
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <div>
        <h2 class="font-normal font-bold">{{ $route.params.slug }}</h2>
        <p class="text-grey-dark mt-2">{{ thisGames.length }}場比賽</p>
      </div>
      <button class="bg-indigo-dark hover:bg-indigo-darker text-white text-sm py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add New Book</button>
    </div>
    <div v-for="game, i in thisGames" class="px-6 md:px-0 mt-4 flex flex-wrap order-1 md:-order-1 md:shadow-md" id="section-stats">
      <div class="p-8 px-6 w-full md:w-2/5 bg-white shadow-none">
        <h4 class="font-bold text-grey-darker">Game {{i+1}}</h4>
        <table class="mt-4 w-full">
          <thead class="p-2 text-sm leading-loose border-b text-indigo">
            <tr>
              <td>隊伍</td>
              <td class="text-right">分數</td>

            </tr>
          </thead>
          <tbody class="p-2 leading-loose text-sm">
            <tr class="border-b">
              <td class="py-2 font-medium">{{ game.firstTeam.name }}</td>

              <td class="py-2 text-right font-medium text-lg">
                <img v-if="game.firstTeam.id === game.winnerTeam.id" src="/images/iconmonstr-badge-1.svg" alt="win-icon" class="pl-2 align-middle" style="width: 24px">
                <span class="align-middle font-bold title">{{ game.firstTeamScore }}</span>
              </td>
            </tr>
            <tr class="border-b">
              <td class="py-2 font-medium">{{ game.secondTeam.name }}</td>

              <td class="py-2 text-right font-medium text-lg">
                <img v-if="game.secondTeam.id === game.winnerTeam.id" src="/images/iconmonstr-badge-1.svg" alt="win-icon" class="pl-2 align-middle" style="width: 24px">
                <span class="align-middle font-bold title">{{ game.secondTeamScore }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-full md:w-3/5 p-8 pt-0 md:pt-16 sm:pl-1 mt-0 lg:pl-8 bg-white shadow-none">
        <div class="flex">
          <div class="w-full">
            <p class="text-indigo text-sm p-2">Memo</p>
            <p class="font-medium text-sm pl-2">{{ game.memo }}</p>
          </div>
        </div>
        <div class="pt-6">
          <p class="text-indigo text-sm p-2">影片連結</p>
          <p class="font-medium text-sm pl-2 leading-normal"><a class="no-underline text-indigo-dark" :href="game.youtubeLink" target="_blank">Watch Now</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
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