<template>
  <div class="px-6 md:px-0 mt-4 flex flex-wrap order-1 md:-order-1 md:shadow-md" id="section-stats">
    <div class="p-8 px-6 w-full md:w-1/4 bg-white shadow-none">
      <h4 class="font-bold text-grey-darker">Game {{index+1}}</h4>
      <table class="mt-4 w-full">
        <thead class="p-2 text-sm leading-loose border-b text-indigo">
          <tr>
            <td>隊伍</td>
            <td class="text-right">分數</td>
          </tr>
        </thead>
        <tbody class="p-2 leading-loose text-sm">
          <tr class="border-b">
            <td class="py-2 font-medium"><nuxt-link class="font-bold text-lg text-black" :to="`/teams/${game.firstTeam.id}`">{{ game.firstTeam.shortName }}</nuxt-link></td>
            <td class="py-2 text-right font-medium text-lg">
              <img v-if="game.firstTeam.id === game.winnerTeam.id" src="/images/iconmonstr-badge-1.svg" alt="win-icon" class="pl-2 align-middle inline-block" style="width: 24px">
              <span class="align-middle font-bold title text-xl">{{ game.firstTeamScore }}</span>
            </td>
          </tr>
          <tr class="border-b">
            <td class="py-2 font-medium"><nuxt-link class="font-bold text-lg text-black" :to="`/teams/${game.secondTeam.id}`">{{ game.secondTeam.shortName }}</nuxt-link></td>
            <td class="py-2 text-right font-medium text-lg">
              <img v-if="game.secondTeam.id === game.winnerTeam.id" src="/images/iconmonstr-badge-1.svg" alt="win-icon" class="pl-2 align-middle inline-block" style="width: 24px">
              <span class="align-middle font-bold title text-xl">{{ game.secondTeamScore }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full md:w-3/4 pt-0 md:pt-12 sm:pl-1 mt-0 lg:pl-2 bg-white shadow-none">
      <div class="flex flex-wrap">
        <div class="flex-none w-full px-6 p-2 sm:p-6 lg:w-1/3">
          <p class="text-indigo text-sm">Memo</p>
          <p class="font-medium leading-normal pt-4">{{ game.memo }}</p>
        </div>
        <div class="flex-none w-full p-8 lg:w-2/3">
          <!-- <p class="text-indigo text-sm p-2">影片連結</p> -->
          <div class="">
            <div class="video-container">
              <iframe class="video" :src="`https://www.youtube.com/embed/${game.youtubeLink}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  props: {
    game: Object,
    index: Number
  }
}
</script>