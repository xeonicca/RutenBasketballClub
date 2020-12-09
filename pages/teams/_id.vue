<template>
  <div class="flex-1 md:px-6 pt-10" id="content">
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <nuxt-link class="text-indigo text-sm" to="/teams">&lt; 隊伍列表</nuxt-link>
    </div>
    <!-- Title -->
    <div class="py-6 mt-4 flex flex-wrap md:shadow-md bg-white shadow-md md:shadow-none">
      <h2 class="flex-none px-6 py-2 w-full text-indigo font-bold">{{ team.name }}</h2>
      <h1 class="flex-none px-6 p w-full font-bold">{{ team.shortName }}</h1>
      <div class="flex-none w-full md:w-1/3 relative p-8">
        <img class="w-full object-fit" :src="team.imageUrl" :alt="team.shortName">
      </div>
      <div class="flex-none p-4 px-6 w-full md:w-1/3 rounded md:rounded-r-none">
        <table class="mt-4 w-full">
          <thead class="p-2 text-sm leading-loose border-b text-indigo">
            <tr>
              <td>比賽</td>
              <td></td>
            </tr>
          </thead>
          <tbody class="p-2 leading-loose text-sm">
            <tr class="border-b">
              <td class="py-2">比賽次數</td>
              <td class="py-2 text-right">{{ team.gamesCount }}</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">勝場次數</td>
              <td class="py-2 text-right">{{ team.wonGamesCount }}</td>
            </tr>
          </tbody>
        </table>

        <table class="mt-8 w-full">
          <thead class="p-2 text-sm leading-loose border-b text-indigo">
            <tr>
              <td>對戰概況</td>
              <td></td>
            </tr>
          </thead>
          <tbody class="p-2 leading-loose text-sm">
            <tr class="border-b" v-for="against in matchupAgainst">
              <td class="py-2">{{ against.team.shortName }}</td>
              <td class="py-2 text-right"><span class="text-gray-900 font-bold">{{ against.wins }}</span>勝 <span class="text-gray-900 font-bold">{{ against.loses }}</span>敗 <span class="text-gray-900 font-bold">{{ against.draws }}</span>平手</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex-none w-full md:w-1/3 p-4 md:pt-12 md:pl-1 mt-4 md:mt-0 lg:pt-8 lg:pl-8 rounded md:rounded-r-none bg-white">
        <div class="flex flex-wrap">
          <div class="w-1/2 md:w-full">
            <p class="text-indigo text-sm p-2">勝率</p>
            <p class="font-medium text-sm pl-2 mt-1">{{ team.wonGamesCount/team.gamesCount | percentage }}</p>
          </div>
          <div class="w-1/2 md:w-full md:mt-4">
            <p class="text-indigo text-sm p-2">Standing</p>
            <p class="font-medium text-sm pl-2 mt-1">{{ standing | ordinal }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex px-2 pt-6 md:px-0 flex-wrap order-2 pb-8">
      <PlayerCard :key="captain.id" :playerObject="captain" :isCaptain="true" />
      <PlayerCard v-for="p in players" :key="p.id" :playerObject="p" />
    </div>
  </div>
</template>
<script>
import {mapGetters, mapState} from 'vuex'

import PlayerCard from '~/components/PlayerCard'

export default {
  components: {
    PlayerCard
  },
  computed: {
    ...mapState('Game', {
      games: state => state.games
    }),
    ...mapGetters('Team', ['teamsGroupedById', 'teamsStanding']),

    standing() {
      return this.teamsStanding.indexOf(this.team.id) + 1
    },

    matchupAgainst() {
      let id = this.$route.params.id
      return this.games.reduce((all, v) => {
        let opponentId
        if(v.firstTeam.length && v.firstTeam[0] === id) {
          opponentId = v.secondTeam[0]
        } else if(v.secondTeam.length && v.secondTeam[0] === id) {
          opponentId = v.firstTeam[0]
        }

        if(!opponentId) return all

        if(!all[opponentId]) {
          all[opponentId] = {wins: 0, loses: 0, draws: 0, team: this.teamsGroupedById[opponentId]}
        }

        if(v.winnerTeam) {
          if(v.winnerTeam[0] === id) {
            all[opponentId].wins += 1
          } else {
            all[opponentId].loses += 1
          }
        } else {
          all[opponentId].draws += 1
        }

        return all
      }, {})
    }
  },
  filters: {
    ordinal(n) {
      var s = ["th", "st", "nd", "rd"],
      v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    },

    percentage(n) {
      return n * 100 + '%'
    }
  },

  async asyncData(context) {
    let allTeams = await context.store.dispatch('Team/fetch')
    let t = await context.store.dispatch('Team/read', context.route.params.id)
    let team = context.$createModel('Team', t)
    let players = await team.getPlayers()
    let captain = await team.getCaptain()

    return {
      allTeams,
      team,
      players,
      captain
    }
  }
}
</script>